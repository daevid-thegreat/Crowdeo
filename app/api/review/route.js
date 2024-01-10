import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from "next/server";

export async function POST(req: NextRequest) {

  const { companyId, rating, comment } = req.body;

  const prisma = new PrismaClient();

  try {
    const newReview = await prisma.review.create({
      data: {
        rating,
        comment,
        company: {
          connect: {
            id: companyId,
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
