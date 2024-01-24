import {PrismaClient} from '@prisma/client';
import {NextResponse} from "next/server";

export async function GET(req, { params }) {
  const id = params.id;
  const prisma = new PrismaClient();

  try {
    const company = await prisma.company.findUnique({
      where: {
        id: id,
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
