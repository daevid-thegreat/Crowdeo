import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from "next/server";
import Web3 from 'web3';
import { json } from '@helia/json';
import { createHelia } from 'helia';

const helia = createHelia();
const j = json(helia);

export async function POST(req, res) {

  const body = await req.json()

  const prisma = new PrismaClient();

  try {
    const newReview = await prisma.review.create({
      data: {
        rating: body.rating,
        comment: body.comment,
        company: {
          connect: {
            id: body.companyId,
          },
        },
      },
    });

    return NextResponse.json(newReview);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
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

    return NextResponse.json(companies);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
