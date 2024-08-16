const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  const PepeCoin = await hre.ethers.getContractFactory("PepeCoin");

  // Deploy the contract
  const pepeCoin = await PepeCoin.deploy();
  await pepeCoin.deployed();

  console.log("PepeCoin deployed to:", pepeCoin.address);

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();