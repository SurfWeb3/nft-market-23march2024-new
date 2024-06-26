/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Sepolia } from "@thirdweb-dev/chains";
export const NETWORK = Sepolia;
/* export const NETWORK = Mumbai; */

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
 export const MARKETPLACE_ADDRESS = "0xD8Fb95821C95241008acb3460C8966a9ca3cC652";
/* export const MARKETPLACE_ADDRESS = "0x8f1c9273C4934293D4cDDB5B683B71E26cb5061E"; */

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0x1F8F8a03EBFCa75Fc59990167C38f9D82cEB88e4";
/*  "0x60646e161F14c2DebDdaA57eA1c6A7F2e9A51bFa"; */

// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://sepolia.etherscan.io/";
