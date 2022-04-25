import { ethers } from "ethers";
import contractAbi from "../data/contractAbi.json";

export default async function getRaisedCount() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_JSON_RPC_URL);
  const contract = new ethers.Contract("0x127e84af46dbf2a710e0bb8938e1f1922f831b50", contractAbi, provider);

  const totalBalance = await contract.totalBalance();

  return {
    totalBalance: ethers.utils.formatEther(totalBalance)
  }
}
