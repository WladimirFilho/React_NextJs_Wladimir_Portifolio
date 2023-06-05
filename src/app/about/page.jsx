import {workExperience} from '../data/workExperience'
import {education} from '../data/education'
import Timeline from "./components/Timeline";
import {FaRegEdit, TfiRulerAlt2} from "react-icons/all";
import React from "react";
import {ThingsCardsSection} from "./components/ThingsCardsSection";


export const metadata = {
	title: "About page",
};

const About = () => {
	return (
		<div className='flex flex-col'>

			{/* Header section */}
			<section className='w-full lg:px-16 min-h-[calc(100vh-88px)] flex flex-col justify-around items-center'>
				<h1 className='mainTitle lg:mt-18 mt-18'>I little bit
					about me!</h1>
				<div className="max-w-[900px] mx-auto flex flex-col items-center">

					<p className='text-center lg:mt-0 mt-20'>After years of experience as an <span
						className='font-semibold'>Art Director 🎨 </span>
						working with range of
						products and clients, I made the decision to change my career path and pursue one of my passions:<span
							className='font-semibold'> the
						magnificent world
						of developing applications 🧑‍💻.</span></p>
				</div>


				{/* Cards My Abilities */}
				<div className='flex flex-col items-center lg:mt-0 mt-20'>

					{/* Things card section */}
					<ThingsCardsSection/>

				</div>

			</section>
			<section
				className='lg:min-h-[calc(100vh-88px)] min-h-[calc(100vh-152px)] flex flex-col justify-start items-center'>

				<h2 className='mainTitle mt-20 mb-20 lg:mb-28'>Education & experience</h2>

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
