require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  // How to define which test network to deploy to?
  networks: {
    sepolia:{
      url: process.env.QUICKNODE_RPC_URL,
      // How do we define which account to use for deployment
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  

};
