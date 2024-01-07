const Web3 = require('web3');
const { abi, evm } = require('./MyToken.json'); // Replace with your compiled ABI and Bytecode

const web3 = new Web3('YOUR_ETHEREUM_NODE_URL'); // Use Infura or any other Ethereum node URL

const deployContract = async () => {
  const accounts = await web3.eth.getAccounts();

  const contract = new web3.eth.Contract(abi);

  const deployment = contract.deploy({
    data: evm.bytecode.object,
  });

  const gasEstimate = await deployment.estimateGas();
  const gasPrice = await web3.eth.getGasPrice();

  const deployedContract = await deployment.send({
    from: accounts[0],
    gas: gasEstimate,
    gasPrice,
  });

  console.log('Contract deployed at:', deployedContract.options.address);
};

deployContract();
