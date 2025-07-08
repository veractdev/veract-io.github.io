'use client'
import React, { useEffect, useState } from "react";

export default function AgentTitle() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    loaded && (
        <div className="w-[213px] h-[46px] flex flex-row items-center justify-center gap-[10px]">
            <div className="w-[10px] h-[9px] bg-[#FAFAFA] rounded-full"></div>
            <div className="text-white text-[24px] font-bold">Agentic Layer</div>
        </div>
    )
  );
}


