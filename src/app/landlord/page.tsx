import type { Metadata } from "next";
import LandlordGuide from "@/components/landlord/LandlordGuide";

export const metadata: Metadata = {
  title: "Landlord Guide — Modified NNN Lease Agreement",
};

export default function LandlordPage() {
  return <LandlordGuide />;
}
