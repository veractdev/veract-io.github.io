"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import AgenticLayer from "../components/layout/Agent/AgenticLayer";
import AgentBanner from "../components/layout/Agent/Agent_Banner";
import OurProcess from "../components/layout/Agent/OurProcess";
import MultiAgent from "../components/layout/Agent/MultiAgent";
import AiAgent from "../components/layout/Agent/AiAgent";
import Agent_Footer from "../components/layout/Agent/Agent_Footer";
import FAQ from "../components/layout/Landing_Page/FAQ";
import { AgentPageData } from "@/lib/custom_data";

export default function Page() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    loaded && (
      <div className="w-screen flex items-center justify-center flex-col bg-[#080808] select-none">
        <Navbar />
        <AgentBanner />
        <AgenticLayer />
        <AiAgent />
        <OurProcess />
        <MultiAgent />
        <FAQ faq_props={AgentPageData.faq} />
        <Agent_Footer />
      </div>
    )
  );
}
