'use client'

import {DevJobDescriptionComponent} from "../../components/DevJobDescriptionComponent";
import {designerProjectList, juniorDevProjectList} from "../../../data/projectsList";
import {ImageComponent} from "../../components/ImageComponent";
import {useRouter} from "next/navigation";

const Project = ({params}) => {

	const router = useRouter()


	let project
	if (params.type === 'dev') {
		const filteredProjectDevList = juniorDevProjectList.filter(project => project.id === Number(params.id))
		project = filteredProjectDevList[0]
	} else {
		const filteredProjectDesignList = designerProjectList.filter(project => project.id === Number(params.id))
		project = filteredProjectDesignList[0]

	}


	return (
		<div className='w-full lg:mt-32'>
			<button
				onClick={() => {
					router.back()
				}}
				className='mb-6'>
				- back
			</button>


			<section className='flex gap-14 lg:flex-row flex-col-reverse '>
				<ImageComponent
					project={project}
				/>
				<DevJobDescriptionComponent
					project={project}
				/>
			</section>

		</div>
	)
}
export default Project;