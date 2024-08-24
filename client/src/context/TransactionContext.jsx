import React, { useContext, useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { ethers } from "ethers";
// console.log(ethers);

import { contractABI, contractAddress, network } from "../utlis/constants";

export const TransactionContext = React.createContext();
// console.log(contractABI);

const { ethereum } = window;
// console.log(new ethers.providers.Web3Provider(ethereum).getSigner());

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionContract;
};

// eslint-disable-next-line react/prop-types
export const TransactionsProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [currentChainId, setCurrrentId] = useState("");
  const [weiBalance, setWeiBalance] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ addressTo: "", amount: "" });
  const [blockUrl, setBlockUrl] = useState("");
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem("transactionCount")
  );
  const [statusNetwork, setStatusNetwork] = useState("0x1");
  const [chainId, setChainId] = useState("0x1");

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnect = async () => {
    try {
      // if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      // console.log(accounts, "ThIS FROM ACCOUNT LOG");

      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Account Founded");
      }
    } catch (error) {
      // console.log(error);
     
      throw new Error("Please Install Metamask! line 58");
    }
  };

  const connectWallet = async () => {
    try {
      // if (!ethereum) return alert("Please install MetaMask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      // console.log(error);
      // console.log(error);
      // throw new Error("Please Install Metmask!");
      return (
        <div>
          <h1 className="text-red text-4xl">Please Install Metamas!</h1>
        </div>
      );
    }
  };

  const sendTransaction = async () => {
    try {
      // checkIfWalletIsConnect();
      // if (!ethereum) return alert("Please install MetaMask");
      const { addressTo, amount } = formData;
      const transactionContract = getEthereumContract();
      const parsedAmount = ethers.utils.parseEther(amount);

      // console.log(addressTo);
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: "0x5208", // 21000 gwi
            value: parsedAmount._hex,
          },
        ],
      });
      // await transactionContract.addToBlockchain(
      //   addressTo,
      //   parsedAmount
      // );

      // setIsLoading(true);
      // console.log(`Loading - ${transactionHash.hash}`);
      // await transactionHash.wait();
      // console.log(`Success - ${transactionHash.hash}`);
      // setIsLoading(false);

      const transfer = await transactionContract.getTransactionCount();

      setTransactionCount(transactionContract.toNumber());

      window.location.reload();
      return transfer;
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object.");
    }
  };

  
  

  const getBalances = async () => {
    try {
      // Fetch balance using the correct block parameter

      const balanceWei = await window.ethereum.request({
        method: "eth_getBalance",
        params: [currentAccount, "latest"],
      });

      // console.log(balanceWei)
      
        const bal = ethers.utils.formatEther(balanceWei);
        setWeiBalance(bal);

        // console.log(balanceWei.toString());
        // Convert balance from Wei to Ether

        // console.log(`Balance: ${balanceInEther} ETH`);
      
    } catch (error) {
      if (error.code === -32602) return;
      console.error("Error fetching balance:", error.message || error);
    }
  };

  const switchNetwork = async () => {
    try {
      // const binanceTestChainId = "0x61";
      if (!ethereum) throw new Error("MetaMask is not installed!");

      // console.log(currentChainId, "THIS LINE FROM 142");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: currentChainId },null],
      });

      window.location.reload();
      // console.log(currentChainId);
    } catch (err) {
      function getChainInfo(currentChainId) {
        return network.find((chain) => chain.chainId === currentChainId);
      }
      // console.log(getChainInfo(currentChainId))

      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [getChainInfo(currentChainId),null],
      });

      window.location.reload();
      console.log(err);

      throw new Error(
        "This network is not available in your metamask, please add it"
      );
    }
  };



  async function checkStatusNetwork() {
    if (currentAccount.length > 0) {
      const chainId = await window.ethereum.request({ method: "eth_chainId" });

      setChainId(chainId);
      // console.log(chainId);
      network.map((url) => {
        if (chainId === url.chainId)
          // console.log(url.blockExplorerUrls, "THIS FROM LINE 180");
        setBlockUrl(url.blockExplorerUrls[0]);
      });
      // console.log(chainId, "THIS IS CHAINID🎶🎶🎶🎶🎶🎶");
    }
  }

  const getLogout = async () => {
    try {
      await ethereum.request({
        method: "wallet_revokePermissions",
        params: [
          {
            eth_accounts: currentAccount,
          },
        ],
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("you got logout from dappp");
    }
  };
  

getBalances();
checkStatusNetwork();

// console.log(currentAccount.length);
useEffect(() => {
  checkIfWalletIsConnect();
  
  }, [transactionCount]);
  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        setFormData,
        handleChange,
        sendTransaction,
        formData,
        getBalances,
        getLogout,
        setCurrrentId,
        weiBalance,
        statusNetwork,
        chainId,
        setStatusNetwork,
        blockUrl,
        switchNetwork
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
