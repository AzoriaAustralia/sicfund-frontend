import { ethers } from "ethers";
import contractAbi from "../data/contractAbi.json";


const purchaseNft = async (amount) => {
   try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const signerAddr = await signer.getAddress()
      const purchaseContract = new ethers.Contract("0x127e84aF46dbf2A710E0bb8938e1F1922f831b50", contractAbi, signer);

      const price = await purchaseContract.tokenPrices(1);
      const data = await purchaseContract.purchase(signerAddr, amount, 1, {
         value: String(price * amount)
      })

      return {
         data,
      }
   } catch(error) {
      return {
         error
      }
   }
};

export default purchaseNft;
