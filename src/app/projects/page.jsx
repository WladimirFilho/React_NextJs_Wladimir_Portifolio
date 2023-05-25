'use client'

import ProjectCard from "./components/projectCard";
import {useEffect, useState} from "react";
import {designerProjectList, juniorDevProjectList} from "../data/projectsList";

export default function Projects() {

	const [projects, setProjects] = useState([]);
	const [selected, setSelected] = useState({dev: true, design: false});


	const cardsDevChangeHandler = () => {
		setProjects(juniorDevProjectList)
		setSelected({dev: true, design: false})
		localStorage.setItem('type', 'dev')
	}
	const cardsDesignChangeHandler = () => {
		setProjects(designerProjectList)
		setSelected({dev: false, design: true})
		localStorage.setItem('type', 'design')
	}

	useEffect(() => {
		const type = localStorage.getItem('type')
		if (type === 'design') {
			cardsDesignChangeHandler()
		} else {
			cardsDevChangeHandler()
		}
	}, []);

	return (
		<div className='w-full lg:min-h-[calc(100vh-160px)] flex flex-col justify-start'>
			<h1 className='mainTitle mt-20'>Things I did!</h1>
			<div className='w-full flex justify-center gap-24 mb-8'>
				<button onClick={cardsDevChangeHandler}
				        className={`text-xl font-medium ${selected.dev && 'text-yellow-500'}`}>as Junior Dev
				</button>
				<button onClick={cardsDesignChangeHandler}
				        className={`text-xl font-medium ${selected.design && 'text-yellow-500'}`}>as Designer
				</button>
			</div>
			<section>
				<ul className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
					{projects.map((project) =>
						<ProjectCard
							type={selected.dev ? 'dev' : 'design'}
							key={project.id}
							project={project}
						/>)}
				</ul>
			</section>

		</div>
	)
}