import React, { useEffect, useState } from "react";
const { ethers } = require("ethers");
const { Web3Modal } = require("web3modal");
// import Web3Modal from "web3modal";
// import { ethers } from "ethers";

const { RealEstateAddress, RealEstateAddressABI } = require("./constants");

export const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  // Check if it is connected to wallet
  const checkIfWalletIsConnect = async () => {
    // While installing metamask, it has an ethereum object in the window
    if (!window.ethereum) return alert("Please install MetaMask.");

    // Fetch all the eth accounts
    const accounts = await window.ethereum.request({ method: "eth_accounts" });

    // Connecting account if exists
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log("No accounts found");
    }
  };

  // Connect wallet
  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");

    // Fetch all the eth accounts------------------------------------here----------------
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(accounts[0]);

    // Reloading window
    window.location.reload();
  };

  const getEthereumContract = async () => {
    // Talk to the smart contact in Ethereum blockchain
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    // Implement the signing in metamask
    const signer = provider.getSigner();

    // Three ingredients to fetch an contact
    // RealEstateAddress, RealEstateAddressABI
    const transactionContract = new ethers.Contract(
      RealEstateAddress,
      RealEstateAddressABI,
      signer
    );

    // logging the contract
    // console.log(transactionContract);

    return transactionContract;
  };

  const generateToken = async (divisions, price, landdetails) => {
    console.log("Generating token...");
    
    const contract = await getEthereumContract();

    let index = await contract.currTokenId();

    const res = await revise.addNFT(
      {
        name: "qwqwqw33",
        tokenId: index + 5,
        description:
          "This is not just a mere NFT but is The Earth itself and it has emotions !!! Voila !!! , It will feel sad when the emissions in the linked location increase in comparison to yesterday and happy when less compared to yesterday. Try to keep it happy ALWAYS",
        image: "https://i.ibb.co/4dXWQhC/Frame-57.gif",
      },
      [{ condition: "Neutral" }, { location: "Gandhinagar" }],
      collectionId
    );

    console.log(res.id);

    const tokencreated = await contract.createToken(
      divisions,
      price,
      landdetails,
      res.id
    );
    await tokencreated.wait();
  };

  const createSale = async (url, formInputPrice, isReselling, id) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const price = ethers.utils.parseUnits(formInputPrice, "ether");

    // solidity function call
    const listingPrice = await contract.getListingPrice();

    // solidity function call
    const transaction = !isReselling
      ? await contract.createToken(url, price, {
          value: listingPrice.toString(),
        })
      : await contract.resellToken(id, price, {
          value: listingPrice.toString(),
        });

    // setIsLoadingNFT(true);
    await transaction.wait();
  };

  const buyNFT = async (nft) => {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(nft.tokenId, {
      value: price,
    });

    // setIsLoadingNFT(true);
    await transaction.wait();
    // setIsLoadingNFT(false);
  };

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        checkIfWalletIsConnect,
        generateToken,
        createSale,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
