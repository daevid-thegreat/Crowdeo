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

    const cid = await j.put(body);

    // Step 2: Interact with the smart contract
    const contractABI = [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'rating',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'comment',
            type: 'string',
          },
        ],
        name: 'ReviewToken',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ];
    const contractAddress = '0xYourContractAddress'; // Replace with your actual contract address
    const ethereumNodeURL = '127.0.0.1:8545';

    const web3 = new Web3(new Web3.providers.HttpProvider(ethereumNodeURL));

    // Replace with the private key of the user submitting the review
    const privateKey = '0xYourPrivateKey';

    // Use the private key to sign the transaction
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    // Get the contract instance
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Call the submitReview function
    await contract.methods.submitReview(rating, comment).send({
      from: account.address,
      gas: 200000, // Adjust the gas limit based on your contract's requirements
    });

    return NextResponse.json({...newReview, cid});
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
