import { ethers } from "ethers";
import contractAbi from "../data/contractAbi.json";


const purchaseNft = async (amount) => {
   try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const signerAddr = await signer.getAddress()
      const purchaseContract = new ethers.Contract(process.env.NEXT_PUBLIC_PURCHASE_CONTRACT_ADDRESS, contractAbi, signer);

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
