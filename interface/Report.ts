import { Timestamp } from "firebase/firestore";

export interface IReport {
  reportId: string;
  cleanerDoc: string;
  createdAt: Timestamp;
  issues: string[];
  message: string;
  status: "active";
  updatedAt: Timestamp;
  userDoc: string;
}
