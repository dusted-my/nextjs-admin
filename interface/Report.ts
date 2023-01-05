import { Timestamp } from "firebase/firestore";

export interface IReport {
  reportId: string;
  cleanerDoc: string;
  createdAt: Timestamp;
  issues: string[];
  message: "The moment I open the app after closing at the background, it takes more than 5 seconds to load!!!";
  status: "active";
  updatedAt: Timestamp;
  userDoc: string;
}
