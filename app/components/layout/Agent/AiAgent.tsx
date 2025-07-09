'use client'
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";
import AgentRobot from "./AgentRobot";

export default function AiAgent() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
      <AgentTitle title="AI Agent" title_description="Supercharge your business with AI Agents" description="Custom AI agents mimic human workflows and integrate into your tools to plan, execute, and scale work."/>
    )
  );
}


