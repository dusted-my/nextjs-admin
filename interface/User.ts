import { Timestamp } from "firebase/firestore";

export interface IUser {
  uid: string;
  email: string;
  fullName: string;
  isCleaner: boolean;
  status: "active" | "pending_cleaner";
  createdAt: Timestamp;
  updatedAt: Timestamp;

  // cleaner
  nric?: string;
  address?: string;
  hourlyRate?: number;
  gender?: string;
  imageUrl?: string;
  nricFrontImageUrl?: string;
  nricBackImageUrl?: string;
  services?: string[];
  stars?: number;
}
