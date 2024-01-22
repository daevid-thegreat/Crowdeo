// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CrowdoeToken is ERC20, Ownable {
    constructor() ERC20("CrowdoeToken", "MTK") {
        // Mint 100,000 tokens during deployment
        _mint(msg.sender, 100000 * 10**decimals());
    }

    // Function to mint additional tokens (onlyOwner)
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}

contract ReviewToken is Ownable {
    CrowdoeToken public token;

    event ReviewSubmitted(address indexed reviewer, string review, uint256 tokensEarned);

    constructor(address _tokenAddress) {
        token = CrowdoeToken(_tokenAddress);
    }


    function submitReviewWithIPFS(string memory _ipfsHash) external {
        require(bytes(_ipfsHash).length > 0, "IPFS hash cannot be empty");

        // Assuming each IPFS review earns 20 tokens (adjust as needed)
        uint256 tokensToEarn = 20;

        // Transfer tokens to the reviewer
        token.transfer(msg.sender, tokensToEarn);

        emit ReviewSubmitted(msg.sender, _ipfsHash, tokensToEarn);
    }
}
