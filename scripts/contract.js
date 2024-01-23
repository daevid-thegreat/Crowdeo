// utils/contract.js
import { web3 } from './web3';

const contractABI = ["c0e5e19049e9d1ecae166588ec226d1c.json"]; // Replace with your actual ABI
const contractAddress = '0x...'; // Replace with your actual contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

export { contract };
