import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utlis/refersConstants";

// Create context
export const ReferContext = createContext();

// Function to initialize Ethereum contract
const getEthereumContract = () => {
  if (!window.ethereum) {
    console.error("Ethereum object not found");
    return null;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const referContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return referContract;
};

// Provider component
export const RefersProvider = ({ children }) => {
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState("");

  useEffect(() => {
    const initContract = async () => {
      const contractInstance = getEthereumContract();
      setContract(contractInstance);
    };

    const fetchAccount = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      }
    };

    initContract();
    fetchAccount();
  }, []);

  // Function to handle refer and earn
  const referAndEarn = async (taskId, referrerAddress) => {
    if (!contract) {
      console.error("Contract not initialized");
      return;
    }

    try {
      // Call the referAndEarn method of the smart contract
        const tx = await contract.referAndEarn(taskId, referrerAddress);
        console.log(tx,'THIS FROM LINE 60🎈🎈🎈')

      await tx.wait(); // Wait for the transaction to be mined
      console.log("Transaction successful:", tx);
    } catch (error) {
      console.error("Error referring and earning:", error);
    }
  };

  return (
    <ReferContext.Provider
      value={{
        contract,
        account,
        referAndEarn,
      }}
    >
      {children}
    </ReferContext.Provider>
  );
};
