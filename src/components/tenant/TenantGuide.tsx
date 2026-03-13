"use client";

import { useState } from "react";
import GuideHeader from "@/components/ui/GuideHeader";
import TabNav from "@/components/ui/TabNav";
import Footer from "@/components/ui/Footer";
import OverviewTab from "./OverviewTab";
import CostsTab from "./CostsTab";
import RightsTab from "./RightsTab";
import ObligationsTab from "./ObligationsTab";
import RisksTab from "./RisksTab";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "costs", label: "Your Costs" },
  { id: "rights", label: "Your Rights" },
  { id: "obligations", label: "Your Obligations" },
  { id: "risks", label: "Risks & Exits" },
];

export default function TenantGuide() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-3xl mx-auto px-4">
      <GuideHeader party="tenant" />
      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "overview" && <OverviewTab />}
      {activeTab === "costs" && <CostsTab />}
      {activeTab === "rights" && <RightsTab />}
      {activeTab === "obligations" && <ObligationsTab />}
      {activeTab === "risks" && <RisksTab />}

      <Footer />
    </div>
  );
}
