import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { IContract } from "../interface";

export const getContracts = async () => {
  const ref = collection(firestore, "contracts");
  const snapshot = await getDocs(ref);
  const contracts: IContract[] = [];
  snapshot.forEach((res) => {
    const user = res.data() as IContract;
    contracts.push({ ...user, contractId: res.id });
  });
  return contracts;
};
