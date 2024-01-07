// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CrowdoeToken is ERC20, Ownable(0x03f7EDd3c39D5a0e8c9189f7fBF2Eaf4Ce49ef10) {
    constructor() ERC20("CrowdoeToken", "MTK") {
        // Mint 100,000 tokens during deployment
        _mint(msg.sender, 100000 * 10**decimals());
    }

    // Function to mint additional tokens (onlyOwner)
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}

contract ReviewToken is Ownable(0x03f7EDd3c39D5a0e8c9189f7fBF2Eaf4Ce49ef10) {
    CrowdoeToken public token;

    event ReviewSubmitted(address indexed reviewer, string review, uint256 tokensEarned);

    constructor(address _tokenAddress) {
        token = CrowdoeToken(_tokenAddress);
    }

    function submitReview(string memory _review) external {
        require(bytes(_review).length > 0, "Review cannot be empty");

        // Assuming each review earns 10 tokens (adjust as needed)
        uint256 tokensToEarn = 10;

        // Transfer tokens to the reviewer
        token.transfer(msg.sender, tokensToEarn);

        emit ReviewSubmitted(msg.sender, _review, tokensToEarn);
    }

    // Function to withdraw any accidentally sent ERC20 tokens
    function withdrawTokens(address _token, address _to, uint256 _amount) external onlyOwner {
        token.transfer(_to, _amount);
    }
}
