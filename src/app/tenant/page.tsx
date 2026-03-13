import type { Metadata } from "next";
import TenantGuide from "@/components/tenant/TenantGuide";

export const metadata: Metadata = {
  title: "Tenant Guide — Modified NNN Lease Agreement",
};

export default function TenantPage() {
  return <TenantGuide />;
}
