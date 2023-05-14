'use client'

import ProjectCard from "./components/projectCard";
import {useState} from "react";
import {juniorDevProjectList} from "../data/projectsList";

export default function Projects() {

    const [projects, setProjects] = useState(juniorDevProjectList);


    return (
        <div className='w-full'>
            <h1 className='mainTitle'>Things I did!</h1>
            <div className='w-full flex justify-center gap-24 mb-8'>
                <button className='text-xl font-medium'>as Junior Dev</button>
                <button className='text-xl font-medium'>as Designer</button>
            </div>
            <section>
                <ul className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                    {projects.map((project) =>
                        <ProjectCard
                            key={project.id}
                            project={project}/>)}

                </ul>
            </section>

        </div>
    )
}