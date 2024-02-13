// Import your JSON dataset
// Import the necessary functions and contract

import { getUserBalance, rewardUserForReview } from "./SendReward"; // Adjust the path as necessary

import { PrismaClient } from '@prisma/client';
import data from "./data.json"; // Adjust the path as necessary

async function createMassReview(){
    const prisma = new PrismaClient();
 

// Loop through each entry in the JSON data and execute rewardUserForReview function
data.forEach(async (entry) => {
  const { userAddress, comment, rating, companyId } = entry;

    prisma.review.create({
    data: {
      rating: rating,
      reviewerAddress: userAddress,
      comment: comment,
      company: {
        connect: {
          id: body.companyId,
        },
      },
    },
  }).then(async () => {
    // Execute the rewardUserForReview function for each entry
    rewardUserForReview(userAddress)
  });

    // Log the user's balance after the reward
  const userBalance = await getUserBalance(userAddress);
  console.log(`User ${userAddress} balance is ${userBalance} CDT tokens.`);
});

}

createMassReview();