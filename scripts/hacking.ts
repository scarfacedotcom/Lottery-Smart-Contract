// import { ethers } from "hardhat";
// import { Pwn__factory, Pwn } from "../typechain-types/contracts/hacking.sol/Pwn";


// async function main() {
//   // Replace with the address of the deployed Pwn contract
//   const pwnAddress = "0x174824ebf59ec8aAE10C7d8776d8d59E538a68F1";

//   const [signer] = await ethers.getSigners();
//   const pwn = Pwn__factory.connect(pwnAddress, signer) as Pwn;

//   // Append "Scar Face" to the array of champions
//   await pwn.pwnMe("Scar Face", { value: ethers.utils.parseEther("0.2") });

//   // Print the updated list of champions
//   const champions = await pwn.getAllwiners();
//   console.log("Updated list of champions:", champions);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


// import { ethers } from "ethers";
// //import { Pwn } from "../typechain";
// import { Pwn } from "../typechain-types/contracts/hacking.sol/Pwn";


// async function main() {
//   const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
//   const signer = provider.getSigner();

//   const pwnContract = new ethers.Contract(
//     "0x174824ebf59ec8aAE10C7d8776d8d59E538a68F1", // Replace with your contract address
//     Pwn.abi,
//     signer
//   ) as Pwn;

//   // Call the pwnMe function with your name
//   const tx = await pwnContract.pwnMe("scar face", { value: ethers.utils.parseEther("0.1") });
//   console.log(`Transaction hash: ${tx.hash}`);

//   // Wait for the transaction to be mined
//   await tx.wait();

//   // Get the updated list of champions
//   const champions = await pwnContract.getAllwiners();
//   console.log("New list of champions:", champions);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });


import { ethers } from "hardhat";
import { Contract } from "ethers";

async function main() {
  const pwnContractAddress = "0x174824ebf59ec8aAE10C7d8776d8d59E538a68F1"; // Replace with the actual contract address
  //const signer = await ethers.getSigners()[0];
const [signer] = await ethers.getSigners();

  const pwnContract = await ethers.getContractAt("Pwn", pwnContractAddress, signer) as Contract;
  const contribution = ethers.utils.parseEther("0.2"); // Max contribution amount
  const name = "scar face";
  await pwnContract.pwnMe(name, { value: contribution });
  const champions = await pwnContract.champions();
  console.log("Champions:", champions);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });

