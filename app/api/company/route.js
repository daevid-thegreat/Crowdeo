// pages/api/companies/create.js

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { name, description } = req.body;

  const prisma = new PrismaClient();

  try {
    const newCompany = await prisma.company.create({
      data: {
        name,
        description,
      },
    });

    return res.status(201).json(newCompany);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
