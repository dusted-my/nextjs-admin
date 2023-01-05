import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { IUser } from "../interface";

export const updateUserStatus = async (form: {
  uid: string;
  approved: boolean;
}) => {
  const data: Partial<IUser> = {
    status: "active",
    isCleaner: form.approved,
    stars: 5,
  };
  const ref = doc(firestore, `users/${form.uid}`);
  try {
    await updateDoc(ref, data);
  } catch (e: any) {
    throw new Error(e);
  }
};
