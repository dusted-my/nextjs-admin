import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase/config";
import { IContract } from "../interface";

export const getContracts = async () => {
  const ref = collection(firestore, "contracts");
  const q = query(ref, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  const contracts: IContract[] = [];
  snapshot.forEach((res) => {
    const user = res.data() as IContract;
    contracts.push({ ...user, contractId: res.id });
  });
  return contracts;
};
