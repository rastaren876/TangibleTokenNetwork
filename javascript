// deploy.js
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const CommodityToken = await hre.ethers.getContractFactory("CommodityToken");
  const token = await CommodityToken.deploy("Gold Token", "GLD", ethers.utils.parseUnits("1000000", 18));

  console.log("Gold Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
