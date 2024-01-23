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

