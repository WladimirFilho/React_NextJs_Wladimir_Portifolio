"use client";

import DeveloperProjects from "../app/developer/page";
import DesignerProjects from "../app/designer/page";

export default function Home() {
  const type = localStorage.getItem("type") || "developer";

  return (
    <div className="w-full">
      {type === "designer" ? <DesignerProjects /> : <DeveloperProjects />}
    </div>
  );
}
