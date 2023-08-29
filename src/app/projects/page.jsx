"use client";

import ProjectCard from "./components/projectCard";
import { useEffect, useState } from "react";
import {
  designerProjectList,
  juniorDevProjectList,
} from "../data/projectsList";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState({ dev: true, design: false });

  const cardsDevChangeHandler = () => {
    setProjects(juniorDevProjectList);
    setSelected({ dev: true, design: false });
    localStorage.setItem("type", "dev");
  };
  const cardsDesignChangeHandler = () => {
    setProjects(designerProjectList);
    setSelected({ dev: false, design: true });
    localStorage.setItem("type", "design");
  };

  useEffect(() => {
    const type = localStorage.getItem("type");
    if (type === "design") {
      cardsDesignChangeHandler();
    } else {
      cardsDevChangeHandler();
    }
  }, []);

  return (
    <div className="w-full lg:min-h-[calc(100vh-160px)] flex flex-col justify-center pb-10">
      {/* <h1 className='mainTitle mt-20 mb-20'>Things I did!</h1> */}
      <div
        className="w-full flex justify-start
       gap-24 items-start mb-8"
      >
        <button
          onClick={cardsDevChangeHandler}
          className={`font-medium pt-4 hover:border-t-2 hover:border-yellow-400 border-white border-t-2 ${
            selected.dev && "border-yellow-400 pt-4 border-t-2"
          }`}
        >
          Developer
        </button>
        <button
          onClick={cardsDesignChangeHandler}
          className={`font-medium pt-4 hover:border-t-2 hover:border-yellow-400 border-white border-t-2  ${
            selected.design && " border-yellow-400 pt4 border-t-2"
          }`}
        >
          Designer
        </button>
      </div>
      <section className="lg:h-full">
        <ul className="gap-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project) => (
            <ProjectCard
              type={selected.dev ? "dev" : "design"}
              key={project.id}
              project={project}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}
