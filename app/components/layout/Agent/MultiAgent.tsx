"use client";
import React, { useEffect, useState } from "react";
import AgentTitle from "./AgentTitle";
import AgentRobot from "./AgentRobot";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { baseUrl } from "@/lib/custom_data";
interface Agent {
  id: number;
  name: string;
  image: string;
  position: string;
}
export default function MultiAgent() {
  const [loaded, setLoaded] = useState(false);
  const [agentsList, setAgentsList] = useState<Agent[]>([]);
  
  useEffect(() => {
    setLoaded(true);
    setAgentsList([
      {
        id: 1,
        name: "Client Request Intake Agent",
        image: `/Images/agent/agent-1.svg`,
        position: "top-[3%] left-[-3%]",
      },
      {
        id: 2,
        name: "Resource Allocation Agent",
        image: `/Images/agent/agent-2.svg`,
        position: "bottom-[35%] left-[-3%]",
      },
      {
        id: 3,
        name: "Time Tracking & Billing Agent",
        image: `/Images/agent/agent-3.svg`,
        position: "bottom-[59%] left-[23%]",
      },
      {
        id: 4,
        name: "Client Communication Agent",
        image: `/Images/agent/agent-4.svg`,
        position: "top-[6%] right-[35%]",
      },
      {
        id: 5,
        name: "Proposal & Documentation Agent",
        image: `/Images/agent/agent-5.svg`,
        position: "bottom-[17%] left-[43%]",
      },
      {
        id: 6,
        name: "Issue Escalation Agent",
        image: `/Images/agent/agent-6.svg`,
        position: "top-[5%] right-[7%]",
      },
      {
        id: 7,
        name: "Project Health Monitoring Agent",
        image: `/Images/agent/agent-7.svg`,
        position: "top-[43%] right-[12%]",
      },
      {
        id: 8,
        name: "Performance Reporting Agent",
        image: `/Images/agent/agent-8.svg`,
        position: "bottom-[2%] right-[5%]",
      },
    ]);
  }, []);
  
  useEffect(() => {
    if (!loaded) return;
  
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.fade-in-up').forEach((el) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    });
  
    ScrollTrigger.refresh();
  
    return () => ctx.revert();
  }, [loaded]);

  return (
    loaded && (
      <div className="relative w-full h-max flex flex-col items-center justify-center lg:pb-[260px]  pb-[159px]">
        <AgentTitle
          title="Multi Agent"
          title_description="Optimize Operations Using Intelligent Collaborative Agents"
          description="By coordinating multiple AI agents, your everyday business tasks become smoother, faster, and more efficient"
        />
        <div className="scale-down">
          <div className="relative lg:w-[1059.5px] lg:h-[891.5px] md:w-[591.46px] md:h-[497.67px] w-[296.33px] h-[249.34px] right-[-1rem]">
            <img loading="lazy"
              src={`/Images/agent/multi-agent-layers.svg`}
              alt="MultiAgent"
              className="absolute z-[100]"
            />
            {agentsList.map((agent: Agent) => (
              <div
                key={agent.id}
                className={`fade-in-up absolute ${agent.position} lg:drop-shadow-[0px_0px_15.7px_#4285F4] drop-shadow-[0px_0px_4.89px_#4285F4] z-[200]`}
              >
                <AgentRobot agent={agent} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
}
