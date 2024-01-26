// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Crowdoe is ERC20, Ownable(0x03f7EDd3c39D5a0e8c9189f7fBF2Eaf4Ce49ef10) {
    constructor() ERC20("CrowdoeToken", "MTK") {
        // Mint 100,000 tokens during deployment
        _mint(msg.sender, 100000 * 10**decimals());
    }
    // Function to mint additional tokens (onlyOwner)
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // Function to reward a user with 20 tokens for submitting a review
    function rewardUserForReview(address user) external onlyOwner {
        require(balanceOf(owner()) >= 20 * 10**decimals(), "Insufficient balance in the contract");
        _transfer(owner(), user, 20 * 10**decimals());
    }

     // Function to get the token balance of a specific address
    function getTokenBalance(address account) external view returns (uint256) {
        return balanceOf(account);
    }
}



