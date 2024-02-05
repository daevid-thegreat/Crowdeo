import {NextRequest, NextResponse} from "next/server";

import { PrismaClient } from '@prisma/client';
import rewardUserForReview from '@/scripts/SendReward';

export async function POST(req, res) {

  const prisma = new PrismaClient();


  const body = await req.json()
  

  try {
    const reviewID = body.reviewId
    const userAddress = body.userAddress
    const vote = body.vote
    let upvote = 0
    let downvote = 0

    if (vote == true) {
        upvote = 1
        } else {
        downvote = 1
    }
  
    const updateReview = await  prisma.review.update({
        where: {
            id: reviewID
        },
        data: {
            upvote: updateReview.upvote + upvote,
            downvote: updateReview.downvote + downvote
        }
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
