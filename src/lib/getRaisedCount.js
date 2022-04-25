import { ethers } from "ethers";
import contractAbi from "../data/contractAbi.json";

export default async function getRaisedCount() {
  const provider = new ethers.providers.JsonRpcProvider("https://cloudflare-eth.com");
  const contract = new ethers.Contract("0x127e84aF46dbf2A710E0bb8938e1F1922f831b50", contractAbi, provider);

  const totalBalance = await contract.totalBalance();

  return {
    totalBalance: ethers.utils.formatEther(totalBalance)
  }
}
