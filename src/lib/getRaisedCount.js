import { ethers } from "ethers";
import contractAbi from "../data/contractAbi.json";

export default async function getRaisedCount() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC_URL);
  const contract = new ethers.Contract(process.env.NEXT_PUBLIC_PURCHASE_CONTRACT_ADDRESS, contractAbi, provider);

  const totalBalance = await contract.totalBalance();

  return {
    totalBalance: ethers.utils.formatEther(totalBalance)
  }
}
