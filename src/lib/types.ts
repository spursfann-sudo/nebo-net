export interface Flag {
  id: string;
  party: "landlord" | "tenant";
  tab: string;
  section: string;
  note: string;
  createdAt: string;
}

export type CalloutType = "info" | "success" | "warning" | "tip" | "action";

export type Party = "landlord" | "tenant";
