import CrowdoeTokenABI from '../build/contracts/Crowdoe.json'; // Import the ABI of your contract
import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:7545'); // Connect to your Ethereum node


const CrowdoeTokenAddress = '0xc60b6299E1AFfce31e2a1E4Fbd0d310231efDdDf'; // Replace with your contract address

const contract = new web3.eth.Contract(CrowdoeTokenABI.abi, CrowdoeTokenAddress);

export async function rewardUserForReview(userAddress) {
  try {
    const ownerAddress = "0x79bB469E278C7F00697d585edeb84fC6FB1dA994"
    const balance = await contract.methods.balanceOf(ownerAddress).call();

    if (balance >= 20 * 10**18) { // Check if the balance is sufficient
      await contract.methods.rewardUserForReview(userAddress).send({ from: ownerAddress });
      console.log(`User ${userAddress} rewarded with 20 tokens for the review.`);
    } else {
      console.error('Insufficient balance in the contract.');
    }
  } catch (error) {
    console.error('Error rewarding user for review:', error);
  }
}

export async function rewardVoter(userAddress) {
  try {
    const ownerAddress = "0x79bB469E278C7F00697d585edeb84fC6FB1dA994"
    const balance = await contract.methods.balanceOf(ownerAddress).call();

    if (balance >= 10 * 10**18) { // Check if the balance is sufficient
      await contract.methods.rewardVoterForReview(userAddress).send({ from: ownerAddress });
      console.log(`User ${userAddress} rewarded with 10 tokens for voting on the review.`);
    } else {
      console.error('Insufficient balance in the contract.');
    }
  } catch (error) {
    console.error('Error rewarding voter for review:', error);
  }
}

export async function rewardReviewerForUpvote(userAddress) {
  try {
    const ownerAddress = "0x79bB469E278C7F00697d585edeb84fC6FB1dA994"
    const balance = await contract.methods.balanceOf(ownerAddress).call();

    if (balance >= 5 * 10**18) { // Check if the balance is sufficient
      await contract.methods.rewardReviewerForUpvote(userAddress).send({ from: ownerAddress });
      console.log(`User ${userAddress} rewarded with 5 tokens for upvoting the review.`);
    } else {
      console.error('Insufficient balance in the contract.');
    }
  } catch (error) {
    console.error('Error rewarding reviewer for upvote:', error);
  }
}

export async function getUserBalance(userAddress) {
  try {
    const balance = await contract.methods.balanceOf(userAddress).call();
    console.log(`User ${userAddress} has a balance of ${balance} tokens.`);
  } catch (error) {
    console.error('Error getting user balance:', error);
  }
}
