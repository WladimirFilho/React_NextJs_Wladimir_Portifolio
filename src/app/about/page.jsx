import {workExperience} from '../data/workExperience'
import {education} from '../data/education'
import Timeline from "./components/Timeline";
import {FaRegEdit, TfiRulerAlt2} from "react-icons/all";
import React from "react";
import {ThingsCardsSection} from "./components/ThingsCardsSection";


export const metadata = {
	title: "About page",
};

export const About = () => {

	return (
		<div className='flex flex-col'>

			{/* Header section */}
			<section className='w-full lg:px-16 min-h-[calc(100vh-88px)] flex flex-col justify-center'>
				<div className="max-w-[768px] mx-auto mb-16 lg:mb-32 flex flex-col items-center">
					<h1 className='mainTitle'>I little bit
						about me and my aspirations</h1>
					<p className='text-center '>After many years of experience as an Art Director, working with diverse products
						and clients,<br/> I made the decision to change my career path and pursue one of my passions: the world of
						development. This led me to embark on a new journey in another country, where I immersed myself in learning
						a new language and improve my skills as a web and mobile developer.</p>
				</div>


				{/* Cards My Abilities */}
				<div className='flex flex-col items-center'>
					<p className='mb-16 text-3xl font-bold'>Things I am into</p>


					{/* Things card section */}
					<ThingsCardsSection/>

					{/*<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto gap-8'>*/}


					{/*	{abilities.map((ability) => (*/}
					{/*		// eslint-disable-next-line react/jsx-key*/}
					{/*		<div>*/}
					{/*			/!*<BsCircleFill className='text-yellow-500' size={35}/>*!/*/}
					{/*			<ThingsCard*/}
					{/*				key={ability.id}*/}
					{/*				ability={ability}*/}
					{/*			/>*/}
					{/*		</div>*/}
					{/*	))}*/}

					{/*</div>*/}


				</div>

			</section>
			<section className='min-h-[calc(100vh-88px)] flex flex-col justify-start items-center'>

				<h2 className='mainTitle'>Education & experience</h2>

				<div className='w-full flex flex-col lg:flex-row justify-center items-start gap-32'>
					<div className='flex'>
						<Timeline
							title='Education'
							icon={<TfiRulerAlt2 size={40} className='absolute left-4 top-3'/>}
							infoData={education}
						/>
					</div>

					<div className='flex'>
						<Timeline
							title='Work Experience'
							icon={<FaRegEdit size={40} className='absolute left-4 top-3'/>}
							infoData={workExperience}
						/>

					</div>
				</div>
			</section>
		</div>
	);
};
export default About;
