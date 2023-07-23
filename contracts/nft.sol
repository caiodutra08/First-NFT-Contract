// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.4;

// Import the standard
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    constructor() ERC721("CBD's NFT", "CBD-NFT") {
        // Minting 5 NFTs for myself
        for (uint256 index = 1; index < 6; index++) {
            _mint(msg.sender, index); 
        }
    }
}