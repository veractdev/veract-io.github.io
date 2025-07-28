'use client'
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";
import { baseUrl } from "@/lib/custom_data";


export default function AiAgent() {
  const [loaded, setLoaded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabView, setTabView] = useState(false);

  useEffect(() => {
    if (window) {
      if (window.innerWidth < 1024) {
        setTabView(true);
      }
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      }
    }
  }, [])
  const agentVideo = [
    `${baseUrl}/Agent/AiAgent/web-ai-agent.mp4`,
    `${baseUrl}/Agent/AiAgent/tab-view-ai-agent.mp4`,
    `${baseUrl}/Agent/AiAgent/tab-view-ai-agent.mp4`,
  ]

  useEffect(() => {
    setLoaded(true);
    console.log(agentVideo[0]);
  }, []);
  return (
    loaded && (
      <>
        <AgentTitle title="AI Agent" title_description="Supercharge your business with AI Agents" description="Custom AI agents mimic human workflows and integrate into your tools to plan, execute, and scale work." />
        <div className="w-full h-full flex flex-col items-center justify-center mt-[-4.938rem]">
          <video
            className="w-full h-full lg:w-[820px] lg:h-[488px] object-cover background-white px-[1.25rem] pb-[124px] md:pb-0 md:px-[59px] lg:px-0"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source src={`${isMobileView ? agentVideo[2] : isTabView ? agentVideo[1] : agentVideo[0]}`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </>
    )
  );
}


