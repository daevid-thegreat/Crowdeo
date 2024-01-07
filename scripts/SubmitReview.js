// SubmitReview.js
import { useState } from 'react';

const SubmitReview = ({ web3, reviewContractAddress, account }) => {
  const [review, setReview] = useState('');

  const handleReviewSubmit = async () => {
    if (web3 && reviewContractAddress && account) {
      // Assuming ReviewToken has a submitReview function
      const contract = new web3.eth.Contract(ReviewTokenAbi, reviewContractAddress);
      await contract.methods.submitReview(review).send({ from: account });

      // You might want to refresh the token balance or update the UI after submitting a review
    }
  };

  return (
    <div>
      <textarea value={review} onChange={(e) => setReview(e.target.value)} />
      <button onClick={handleReviewSubmit}>Submit Review</button>
    </div>
  );
};

export default SubmitReview;
