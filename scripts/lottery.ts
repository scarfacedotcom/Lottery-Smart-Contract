import { ethers } from "hardhat";

const ConstructionArgs = {
    vrfCordinator: "0x2bce784e69d2Ff36c71edcB9F88358dB0DfB55b4",
    link: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
    hash:"0x0476f9a745b61ea5c0ab224d3a6e4c99f0b02fce4da01143a4f70aa80ae76e8a",
    fee: ethers.utils.parseUnits("100000","gwei"),
    ticketPrice: 10

}
async function main() {

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(ConstructionArgs.vrfCordinator, ConstructionArgs.link, ConstructionArgs.hash, ConstructionArgs.fee,ConstructionArgs.ticketPrice
  );

  await lottery.deployed();

  console.log(`The Lottery contract has been deployed to ${lottery.address}`);

  await lottery.enterLottery({value: 10})
  await lottery.endLottery()
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
