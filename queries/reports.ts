import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { IReport } from "../interface";

export const getReports = async () => {
  const ref = collection(firestore, "reports");
  const snapshot = await getDocs(ref);
  const reports: IReport[] = [];
  snapshot.forEach((res) => {
    const user = res.data() as IReport;
    reports.push({ ...user, reportId: res.id });
  });
  return reports;
};
