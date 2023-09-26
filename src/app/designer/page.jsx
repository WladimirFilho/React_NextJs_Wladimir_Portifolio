"use client";

import ProjectCard from "./components/projectCard";
import { useEffect } from "react";
import { designerProjectList } from "../data/projectsList";

export default function DesignerProjects() {
  useEffect(() => {
    localStorage.setItem("type", "designer");
  }, []);

  return (
    <div className="w-full lg:min-h-[calc(100vh-160px)] flex flex-col justify-center pb-10 -mt-10">
      <section className="lg:h-full">
        <ul className="gap-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          {designerProjectList.map((project) => (
            <ProjectCard type={"designer"} key={project.id} project={project} />
          ))}
        </ul>
      </section>
    </div>
  );
}
