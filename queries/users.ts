import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { IUser } from "../interface";

export const getUsers = async () => {
  const ref = collection(firestore, "users");
  const snapshot = await getDocs(ref);
  const users: IUser[] = [];
  snapshot.forEach((res) => {
    const user = res.data() as IUser;
    users.push({ ...user, uid: res.id });
  });
  return users;
};
