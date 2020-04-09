import { erc20, erc721, tokenid } from "./config.js";
import web3 from "../web3";
import { abi } from "../build/contracts/ChildERC20.json";
import { abi as _abi } from "../build/contracts/ChildERC721.json";

const wallet = web3.eth.accounts.wallet;


const CHE = new web3.eth.Contract(abi, erc20);
// const NFT = new web3.eth.Contract(_abi, erc721);

async function myBalance(address) {
  return await CHE.methods.balanceOf(address).call();
}

// async function displayBalance() {
//   console.log("--- Acc1 balance ---");
//   await CHE.methods
//     .balanceOf(wallet[0].address)
//     .call()
//     .then((res) => {
//       console.log("ERC 20 balance: \t\t" + wallet[0].address + ":\t" + res);
//     });
//   await NFT.methods
//     .balanceOf(wallet[0].address)
//     .call()
//     .then((res) => {
//       console.log("ERC 721 balance: \t\t" + wallet[0].address + ":\t" + res);
//     });

//   console.log("\n");
//   console.log("--- Acc2 balance ---");
//   await CHE.methods
//     .balanceOf(wallet[1].address)
//     .call()
//     .then((res) => {
//       console.log("ERC 20 balance: \t\t" + wallet[1].address + ":\t" + res);
//     });
//   await NFT.methods
//     .balanceOf(wallet[1].address)
//     .call()
//     .then((res) => {
//       console.log("ERC 721 balance: \t\t" + wallet[1].address + ":\t" + res);
//     });

//   console.log("\n");
//   console.log("--- NFT " + tokenid + " owner ---");
//   await NFT.methods
//     .ownerOf(tokenid)
//     .call()
//     .then(
//       (res) => {
//         if (res) console.log("owner of token id " + tokenid + ":\t" + res);
//       },
//       (err) => {
//         console.log(err);
//       }
//     );
// }

// displayBalance();

export default myBalance;
