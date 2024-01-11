import { PrismaClient } from '@prisma/client';
import { NextResponse} from "next/server";

export async function POST(NextRequest) {
    const req = await NextRequest.request;
    console.log(req);

  const prisma = new PrismaClient();

  try {
    const newCompany = await prisma.company.create({
      data: {
        name: req.body.name,
        image: req.body.image,
        description: req.body.description,
        passcode: Math.floor(100000 + Math.random() * 900000).toString(),
      },
    });

    return NextResponse.json(newCompany);
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
    const companies = await prisma.company.findMany({
      include: {
        Review: true,
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
