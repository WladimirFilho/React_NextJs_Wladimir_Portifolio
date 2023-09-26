"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [type, setType] = useState("");

  useEffect(() => {
    setType(localStorage.getItem("type"));
  }, []);

  return (
    <div className="flex flex-col ">
      <div className="lg:h-[calc(100vh-170px)] h-[calc(100vh-152px)]">
        {type === "designer" ? "" : ""}
      </div>
    </div>
  );
}
