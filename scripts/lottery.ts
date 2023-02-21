import { ethers } from "hardhat";

const ConstructionArgs = {
    vrfCordinator: "hhsjhsj",
    link: "gsdjgsjd",

}
async function main() {

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(ConstructionArgs.vrfCordinator, ConstructionArgs.link

  );

  await lottery.deployed();

  console.log(`The Lottery contract has been deployed to ${lottery.address}`);

  await lottery.enterLottery()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
