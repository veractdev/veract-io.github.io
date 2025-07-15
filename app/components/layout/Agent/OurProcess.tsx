"use client"
import { AgentPageData } from "@/lib/custom_data";
import React from "react";
import { Chat , Gear, Funnel , CircleNotch , Check , ArrowUp , File , MagnifyingGlass , PuzzlePiece , ArrowLeft , ArrowRight , Cards , Minus , X, ShieldCheck, Cpu  , FinnTheHuman , Repeat} from "phosphor-react";

export default function OurProcess() {
  return (
    <div className="w-full p-[0rem_2.75rem_4rem_2.75rem] md:p-[6.25rem_4.375rem]  flex flex-col items-center">
      <div className="w-max p-[0.5rem_0.75rem] rounded-[0.375rem] bg-primary-text border-[1px] border-[#222222] figTreeFont text-[0.875rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]">
        {AgentPageData.ourprocess.pageTitle}
      </div>
      <div className="max-w-[43.75rem] text-center syneFont font-medium md:font-normal text-[1.75rem] md:text-[3.125rem] text-white leading-[1.1em] -tracking-[0.04em] py-[1.563rem_0.938rem]">
        {AgentPageData.ourprocess.title}
      </div>
      <div className="max-w-[37.5rem] text-center interFont font-normal md:font-medium text-[#CCCCCC] text-[0.875rem] md:text-[1.125rem] leading-[1.5em] -tracking-[0.02em]">
        {AgentPageData.ourprocess.description}
      </div>
      <div className="flex flex-col items-center justify-center gap-[1.25rem] pt-[3.75rem]">
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-[1.25rem]">
          {AgentPageData.ourprocess.cards.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-[1.25rem] p-[0.625rem] md:p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset] items-center"
            >
              <div className="flex flex-col gap-[0.625rem]">
                <div className="w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                  Step {card.id}
                </div>
                <div className="flex flex-col gap-[0.625rem]">
                  <div className="figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]">
                    {card.header}
                  </div>
                  <div className="w-full md:w-[15.25rem] lg:w-[23.75rem] interFont text-[0.875rem] md:text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]">
                    {card.subHeader}
                  </div>
                </div>
              </div>
              {card.id === 1 && (
                <div className="w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center">
                  <div className="relative flex flex-col items-center gap-[0.625rem] p-[0.625rem_0.813rem_0_0.813rem] shadow-[0px_0px_0px_1px_#222222_inset]">
                    <div className="relative w-[107px] h-[107px] mb-[2.688rem] border-[1px] border-[#222222] rounded-full justify-center items-center duration-500 animate-spin-slow">
                      <img
                        src="/Images/agent/radar.png"
                        className="absolute w-full h-max"
                        alt="Radar"
                      />
                    </div>
                    <div className="absolute w-[calc(100%-1.25rem)] bottom-[0.563rem] left-1/2 transform -translate-x-1/2 interFont text-center text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                      Analyzing current workflow..
                    </div>
                  </div>
                  <div className="p-[0.625rem_0.313rem_0.938rem_0.313rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-col gap-[0.313rem]">
                    <div className="rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]">
                      <ShieldCheck size={13} weight="light" className="text-white"/>
                      <div className="interFont md:text-[0.5rem] text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                        System Check
                      </div>
                    </div>
                    <div className="rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]">
                      <Cpu size={13} weight="light" className="text-white"/>
                      <div className="interFont md:text-[0.5rem] text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                        Process check
                      </div>
                    </div>
                    <div className="rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]">
                      <img src="/Images/agent/speedometer.svg" className="w-[13px] h-[13px]"/>
                      <div className="interFont md:text-[0.5rem] text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                        Speed check
                      </div>
                    </div>
                    <div className="rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]">
                      <FinnTheHuman size={13} weight="light" className="text-white"/>
                      <div className="interFont md:text-[0.5rem] text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                        Manual work
                      </div>
                    </div>
                    <div className="rounded-[0.125rem] shadow-[0px_0px_0px_1px_#222222_inset] flex flex-row items-center gap-[0.313rem] p-[0.313rem]">
                      <Repeat size={13} weight="light" className="text-white"/>
                      <div className="interFont md:text-[0.5rem] text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                        Repetative task
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {card.id === 2 && (
                <div className="flex flex-col w-full h-[180px]">
                  <div className="w-full h-[22px] bg-[#FFFFFF]/5 flex flex-row justify-between items-center p-[6px]">
                    <div className="flex gap-[4px]">
                    <ArrowLeft size={10} weight="light" className="text-white"/>
                    <ArrowRight size={10} weight="light" className="text-white"/>
                    </div>
                    <div className="w-[91px] h-[10px] bg-[#FFFFFF]/5"></div>
                    <div className="flex gap-[4px]">
                        {/*  */}
                        <Cards size={10} weight="light" className="text-white"/>
                        <Minus size={10} weight="light" className="text-white"/>
                        <X size={10} weight="light" className="text-white"/>
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <div className="w-[30px] h-[100%] bg-[#FFFFFF]/5 flex flex-col gap-[9px] items-center pt-[9px]">
                        <File size={18} weight="light" className="text-white"/>
                        <MagnifyingGlass size={18} weight="light" className="text-white"/>
                        <PuzzlePiece size={18} weight="light" className="text-white"/>
                    </div>
                    <div className="w-[230px] h-[128px] overflow-hidden mt-[15px] pl-[5px] ">
                    <div className="relative w-[230px] h-[128px] text-white text-[12px] interFont animate-coding duration-500">
                        {/* <img src="/Images/agent/code.png" className="absolute"/> */}
                        class AutomationTrigger:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary-blue">def __init__</span>(self, threshold):<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.threshold = threshold<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.status = "inactive"<br/><br/>
                        
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary-blue">def check_trigger</span>(self, value):<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if value &gt; self.threshold:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.status = "active"<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "Automation triggered!"<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return "No action taken."<br/><br/>

                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-primary-blue">def get_status</span>(self):<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return f"Status: {self.status}"
                    </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center gap-[1.25rem]">
          {AgentPageData.ourprocess.cards.slice(2, 4).map((card) => (
            <div
              key={card.id}
              className="flex flex-col gap-[1.25rem] p-[0.625rem] md:p-[1.25rem_1.875rem] rounded-[0.5rem] bg-[#0D0D0D]/80 shadow-[0px_0px_0px_1px_#222222_inset]"
            >
              <div className="flex flex-col gap-[0.625rem]">
                <div className="w-max bg-transparent shadow-[0px_0px_0px_1px_#222222_inset] rounded-[0.25rem] p-[0.375rem_0.563rem] figTreeFont text-[0.75rem] text-white font-medium leading-[1em] -tracking-[0.04em]">
                  Step {card.id}
                </div>
                <div className="flex flex-col gap-[0.625rem]">
                  <div className="figTreeFont text-[1.438rem] text-white font-medium leading-[1.2em] -tracking-[0.02em]">
                    {card.header}
                  </div>
                  <div className="w-full md:w-[15.25rem] lg:w-[23.75rem] interFont text-[0.875rem] md:text-[1rem] text-[#CCCCCC] font-medium leading-[1.4em] -tracking-[0.02em]">
                    {card.subHeader}
                  </div>
                </div>
              </div>
              {card.id === 3 && (
              <div className="w-full h-[11.25rem] lg:py-[40px] lg:px-[38px] flex items-center justify-center">
                <div className="flex flex-row justify-center items-center">
                    <div className="flex relative w-[64px] h-[64px] bg-[#0D0D0D]/80 border border-[#222222] rounded-[5px] items-center justify-center z-[200]">
                        <div className="absolute w-[48px] h-[48px] bg-[#4285F4]/5 rounded-full animate-spin-clockwise" style={{background: "linear-gradient(141deg, rgb(66, 133, 244) 13%, rgba(66, 133, 244, 0) 35.0236%, rgba(66, 133, 244, 0) 64.1724%, rgb(66, 133, 244) 88%)"}}></div>
                        <div className="absolute w-[30px] h-[30px] rounded-full animate-spin-reverse" style={{background: "linear-gradient(141deg, rgb(87, 73, 92) 13%, rgba(66, 133, 244, 0) 35.0236%, rgba(66, 133, 244, 0) 64.1724%, rgb(66, 133, 244) 88%)"}}></div>
                    </div>
                    <div className="flex flex-col gap-[10px] z-[100]">
                        <div className="relative items-center flex">
                            <img src="/Images/agent/process-line.png" className="" />
                            <div className="absolute w-[20px] h-[2px] animate-processing-line" style={{background:"linear-gradient(90deg, rgba(66, 133, 244, 0.1) 0%, rgba(66, 133, 244, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(66, 133, 244, 0.6) 100%)"}}></div>
                        </div>
                        <div className="relative items-center flex">
                            <img src="/Images/agent/process-line.png" className="" />
                            <div className="absolute w-[20px] h-[2px] animate-processing-line" style={{background:"linear-gradient(90deg, rgba(66, 133, 244, 0.1) 0%, rgba(66, 133, 244, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(66, 133, 244, 0.6) 100%)"}}></div>
                        </div>
                        <div className="relative items-center flex">
                            <img src="/Images/agent/process-line.png" className="" />
                            <div className="absolute w-[20px] h-[2px] animate-processing-line" style={{background:"linear-gradient(90deg, rgba(66, 133, 244, 0.1) 0%, rgba(66, 133, 244, 0.6) 87.8378%, rgba(221, 121, 253, 0.6) 99.6672%, rgba(66, 133, 244, 0.6) 100%)"}}></div>
                        </div>
                        
                    </div>
                    <div className="w-[64px] h-[64px] bg-[#0D0D0D]/80 border border-[#222222] rounded-[5px] z-[200] overflow-hidden items-center justify-center">
                        <div className="flex flex-col gap-[1rem] items-center justify-center mt-[0.5rem] animate-processing-applications">
                            <img src="/Images/agent/Slack.svg" className="w-[80%] h-[80%]"/>
                            <img src="/Images/agent/Chatgpt.svg" className="w-[80%] h-[80%]"/>
                            <img src="/Images/agent/Gmail.svg" className="w-[80%] h-[80%]"/>
                            <img src="/Images/agent/Discord.svg" className="w-[80%] h-[80%]"/>
                            <img src="/Images/agent/Slack.svg" className="w-[80%] h-[80%]"/>
                        </div>
                    </div>
                </div>
              </div>
              )}
              {card.id === 4 && (
                <div className="w-full h-[11.25rem] flex flex-row gap-[0.313rem] items-center justify-center">
                  <div className="w-[260px] h-[160px] border border-[#222222] px-[10px] py-[13px] flex flex-col gap-[10px]">
                    <div className="w-[240px] h-[38px] flex flex-row pr-[5px] items-center">
                        <div className="w-[201px] flex flex-row gap-[10px]">
                        <div className="w-[28px] h-[28px] bg-[#FFFFFF]/5 relative flex items-center justify-center mr-[7px]">
                          <Chat size={18} weight="bold" className="text-white"/>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <div className="text-[12px] text-white interFont font-medium leading-[1em] -tracking-[0.04em]">Chatbot system</div>
                          <div className="text-[10px] text-white interFont font-regular leading-[1.1em] -tracking-[0.04em]">Efficiency will increase by 20%</div>
                          </div>
                          </div>
                        <CircleNotch size={18} weight="bold" className="text-primary-blue animate-spin-slow"/>
                    </div>
                    <div className="w-[240px] h-[38px] flex flex-row pr-[5px] items-center">
                        <div className="w-[201px] flex flex-row gap-[10px]">
                        <div className="w-[28px] h-[28px] bg-[#FFFFFF]/5 relative flex items-center justify-center mr-[7px]">
                          <Gear size={18} weight="bold" className="text-white"/>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <div className="text-[12px] text-white interFont font-medium leading-[1em] -tracking-[0.04em]">Chatbot system</div>
                          <div className="text-[10px] text-white interFont font-regular leading-[1.1em] -tracking-[0.04em]">Efficiency will increase by 20%</div>
                          </div>
                          </div>
                        <div className="relative flex items-center justify-center overflow-hidden w-[19px] h-[19px] bg-[#FFFFFF]/5 rounded-[4px]"><ArrowUp size={18} weight="bold" className="text-primary-blue animate-arrow-upwards absolute"/></div>
                    </div>
                    <div className="w-[240px] h-[38px] flex flex-row pr-[5px] items-center">
                        <div className="w-[201px] flex flex-row gap-[10px]">
                        <div className="w-[28px] h-[28px] bg-[#FFFFFF]/5 relative flex items-center justify-center mr-[7px]">
                          <Funnel size={18} weight="bold" className="text-white"/>
                        </div>
                        <div className="flex flex-col gap-[4px]">
                          <div className="text-[12px] text-white interFont font-medium leading-[1em] -tracking-[0.04em]">Chatbot system</div>
                          <div className="text-[10px] text-white interFont font-regular leading-[1.1em] -tracking-[0.04em]">Efficiency will increase by 20%</div>
                          </div>
                          </div>
                        <Check size={18} weight="bold" className="text-primary-blue"/>
                    </div>
                    
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
