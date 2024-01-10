import { PrismaClient } from '@prisma/client';
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
    const { id } = params;
  const prisma = new PrismaClient();

  try {
    const company = await prisma.company.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        Review: true,
      },
    });

    return NextResponse.json(company);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  } finally {
    await prisma.$disconnect();
  }
}
