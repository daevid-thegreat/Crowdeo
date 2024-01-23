// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Crowdoe.sol";


contract Review is Ownable(0x03f7EDd3c39D5a0e8c9189f7fBF2Eaf4Ce49ef10) {
    CrowdoeToken public token;

    event ReviewSubmitted(address indexed reviewer, string review, uint256 tokensEarned);

    constructor(address _tokenAddress) {
        token = CrowdoeToken(_tokenAddress);
    }


    function submitReviewWithIPFS(string memory _ipfsHash) external {
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");

        // Assuming each ipfs review earns 20 tokens (adjust as needed)
        uint256 tokensToEarn = 20;

        // Transfer tokens to the reviewer
        token.transfer(msg.sender, tokensToEarn);

        emit ReviewSubmitted(msg.sender, _ipfsHash, tokensToEarn);
    }
}
