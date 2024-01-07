// balance.js
import { useEffect, useState } from 'react';

const Balance = ({ web3, tokenContractAddress, account }) => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      if (web3 && tokenContractAddress && account) {
        // Assuming MyToken has a balanceOf function
        const contract = new web3.eth.Contract(MyTokenAbi, tokenContractAddress);
        const userBalance = await contract.methods.balanceOf(account).call();
        setBalance(userBalance);
      }
    };

    fetchBalance();
  }, [web3, tokenContractAddress, account]);

  return (
    <div>
      <p>Your Token Balance: {balance}</p>
    </div>
  );
};

export default Balance;
