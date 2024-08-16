import { abi } from "./Transactions.json";

export const contractAddress = "0xABAbFba16152Da171DDbceB19E109201006E9A55";
export const contractABI = abi;


export const network = [
  {
    chainId: "0x1", // Ethereum Mainnet Chain ID (in hexadecimal)
    chainName: "Ethereum Mainnet",
    rpcUrls: ["https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"], // Example RPC URL (replace YOUR_INFURA_PROJECT_ID with your actual Infura Project ID)
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://etherscan.io"], // Example block explorer URL
  },
  {
    chainId: "0x38", // BSC Mainnet Chain ID
    chainName: "Binance Smart Chain",
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://bscscan.com/"],
  },
  {
    chainId: "0x2105", // Base Mainnet Chain ID (in hexadecimal)
    chainName: "Base",
    rpcUrls: ["https://mainnet.base.org"], // Example RPC URL
    nativeCurrency: {
      name: "Base Ether",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://basescan.org"],
  },
  {
    chainId: "0xA4B1", // Arbitrum One Mainnet Chain ID (in hexadecimal)
    chainName: "Arbitrum One",
    rpcUrls: ["https://arb1.arbitrum.io/rpc"], // Example RPC URL
    nativeCurrency: {
      name: "Arbitrum Ether",
      symbol: "ETH",
      decimals: 18,
    },
    blockExplorerUrls: ["https://arbiscan.io"], // Example block explorer URL
  },
];
