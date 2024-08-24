import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utlis/constant";
import React, { useState, useEffect } from "react";

export const PepeContext = React.createContext();

const getContractPepe = () => {
  // Connect to the Ethereum provider
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  // Instantiate the contract
  return new ethers.Contract(contractAddress, contractABI, signer);
};

export const ExchangePepeCoinProvider = ({ children }) => {
  const [intialAmount, setAmount] = useState(""); // Initialize as an empty string
  const [exchange, setExchange] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(null);

  // Function to handle ETH for PepeCoin exchange
  const exchangeEthForPepe = async () => {
    try {
      const contract = getContractPepe();
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const ethAmount = ethers.utils.parseEther(intialAmount); // Ensure `intialAmount` is a string representing ETH

      // Call the smart contract function to exchange ETH for PEPE
      const tx = await contract.exchangeEthForPepe({ value: ethAmount });

      // Wait for the transaction to be mined
      await tx.wait();

      // Update state or UI as needed
      setExchange(`Successfully exchanged ETH for PEPE`);
    } catch (err) {
      console.error("Failed to exchange ETH for PEPE:", err);
      throw new Error("Failed to exchange ETH for PEPE");
    }
  };

  const fetchTokenBalance = async () => {
    try {
      if(window.ethereum ==="undefined") return
      const contract = getContractPepe();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0]; // Use the current account

      // Fetch the token balance
      const balance = await contract.balanceOf(account);
      console.log("Raw balance:", balance.toString());

      // Convert balance from smallest unit to human-readable format
      const balanceInUnits = ethers.utils.formatUnits(balance, 18); // Assuming 18 decimals
      console.log("Token Balance:", balanceInUnits);

      // Update state

      setTokenBalance(balanceInUnits);
    } catch (err) {
      console.error("Failed to fetch token balance:", err);
    }
  };
  // fetchTokenBalance();
  // timerFunction();

  return (
    <PepeContext.Provider
      value={{ setAmount, exchange, tokenBalance, exchangeEthForPepe }}
    >
      {children}
    </PepeContext.Provider>
  );
};

// import { ethers } from "ethers";
// import { contractABI, contractAddress } from "../utlis/constant";
// import React, { useState, useEffect } from "react";
// // import { ethers } from "ethers";
// // import { useEffect } from "react";

// export const PepeContext = React.createContext();

// const getContractPepe = () => {
//   // Connect to the Ethereum provider
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   const signer = provider.getSigner();

//   // Instantiate the contract
//   const pepeCoin = new ethers.Contract(contractAddress, contractABI, signer);
//   console.log(pepeCoin);

//   return pepeCoin;
// };

// export const ExchangePepeCoinProvider = ({ children }) => {
//   const [intialAmount, setAmount] = useState();
//   const [exchange, setExchange] = useState();
//   // Function to handle ETH for PepeCoin exchange
//   const exchangeEthForPepe = async () => {
//     try {
//       // Connect to Ethereum provider

//       const getContract = getContractPepe();
//       // console.log(getContract, "FROM LINE 27 PEEP COIN");

//       // console.log(getContract);

//       const accounts = await window.ethereum.request({
//         method: "eth_requestAccounts",
//       });

//       // console.log(accounts[0], "THIS IS FROM PEPE 36");
//       const pepeBalance = await getContract.balanceOf(accounts[0]);
//       // intialAmount(pepeBalance);

//       // console.log(pepeBalance, "This for pepeBalance");

//       // console.log(accounts[0], "From PePe coin Exchange");
//       // Define the amount of ETH to send (e.g., 0.1 ETH)
//       const ethAmount = ethers.utils.parseEther(intialAmount); // 0.1 ETH
//       // console.log(ethAmount);

//       // Call the smart contract function to exchange ETH for PEPE
//       const tx = await getContract.exchangeEthForPepe({ value: ethAmount });
//       // console.log(tx);

//       // Wait for the transaction to be mined
//       const coin = await tx.wait();

//       const balanceInDecimals = ethers.formatUnits(coin.data, 18);
//       // setAmount(coin);
//       setExchange(balanceInDecimals);
//       console.log("SUCESSFULLY EXCHANGE THE PEPE COIN");
//     } catch (err) {
//       console.log(err);
//       // console.log("Failed to transfer fund");
//       throw new Error("SORRY TO SAY THAT! FAILED TO EXCHANGE ");
//     }
//   };
//   // exchangeEthForPepe();

//   const tokenBalance = async () => {
//     // Request account access
//     await window.ethereum.request({
//       method: "eth_requestAccounts",
//     });

//     const tokenContract = getContractPepe();
//     const account = getContractPepe().address;
//     // Fetch the token balance
//     const balance = await tokenContract.balanceOf(account);
//     console.log(account, balance, "THIS FORM LINE 76🥰🥰🥰🥰🥰🥰🥰");

//     // Convert balance from Wei to Ether or token's smallest unit
//     const balanceInUnits = ethers.utils.formatEther(balance, 18); // Assuming 18 decimals

//     console.log("Token Balance:", balanceInUnits);
//   };
//   tokenBalance();
//   useEffect(() => {
//     getContractPepe();
//   }, []);
//   return (
//     <PepeContext.Provider value={{ setAmount, exchange }}>
//       {children}
//     </PepeContext.Provider>
//   );
// };
