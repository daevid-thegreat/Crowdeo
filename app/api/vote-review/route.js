import {NextRequest, NextResponse} from "next/server";

import { PrismaClient } from '@prisma/client';
import rewardUserForReview from '@/scripts/SendReward';

export async function POST(req, res) {

  const prisma = new PrismaClient();


  const body = await req.json()
  

  try {

    const passCode = body.passcode;
    const userAddress = body.userAddress;
    const company = await prisma.company.findFirst({
      where: {
        id: body.companyId,
      },
    });

    if (company.passcode != passCode) {
      console.log(company.passcode + " == " + passCode)
      console.log('Invalid passcode')
      return NextResponse.json({ status: 401, body: 'Invalid passcode'})
    }
  
    const newReview = await prisma.review.create({
      data: {
        rating: parseInt(body.rating),
        reviewAddress: userAddress,
        comment: body.comment,
        company: {
          connect: {
            id: body.companyId,
          },
        },
      },
    }).then(async () => {
      rewardUserForReview(userAddress)
    });

    console.log('New review created')


    return NextResponse.json({ status: 200, body: newReview })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, body: error })
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET() {
  const prisma = new PrismaClient();

  try {
    const companies = await prisma.review.findMany({
      include: {
        company: true,
      },
    });

    return NextResponse.json({ status: 200, body: companies });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ status: 500, body: error })
  } finally {
    await prisma.$disconnect();
  }
}
