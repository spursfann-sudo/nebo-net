"use client";

import { useState } from "react";
import GuideHeader from "@/components/ui/GuideHeader";
import TabNav from "@/components/ui/TabNav";
import Footer from "@/components/ui/Footer";
import OverviewTab from "./OverviewTab";
import MoneyTab from "./MoneyTab";
import ProtectionsTab from "./ProtectionsTab";
import ObligationsTab from "./ObligationsTab";
import TimelineTab from "./TimelineTab";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "money", label: "Money" },
  { id: "protection", label: "Protections" },
  { id: "obligations", label: "Your Obligations" },
  { id: "timeline", label: "Timeline" },
];

export default function LandlordGuide() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="max-w-3xl mx-auto px-4">
      <GuideHeader party="landlord" />
      <TabNav tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "overview" && <OverviewTab />}
      {activeTab === "money" && <MoneyTab />}
      {activeTab === "protection" && <ProtectionsTab />}
      {activeTab === "obligations" && <ObligationsTab />}
      {activeTab === "timeline" && <TimelineTab />}

      <Footer />
    </div>
  );
}
