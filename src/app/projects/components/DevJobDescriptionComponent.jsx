import Image from "next/image";
import Link from "next/link";


export const DevJobDescriptionComponent = ({project}) => {
	return (
		<>
			<div className='w-[40%]'>
				<div>
					<h1 className='projectTitle'>{project.title}</h1>
					<p className='projectDescription'>{project.description}</p>
				</div>
				<div>
					<h2 className='projectSubtitle'>Idea</h2>
					<p className='projectDescription'>{project.ideaDescription}</p>
				</div>
				<div>
					<h2 className='projectSubtitle'>Features</h2>

					{/* Features */}
					<ul>{project.features?.map((feature, index) => (
						<li className='mb-1' key={index}>- {feature}</li>
					))}
					</ul>

					{/* Stack Tech */}
					<ul className='mt-4 flex gap-3'>

						{project.techStack.map((item, index) => (
							<li key={index}>
								<Image
									src={item}
									alt='tech stack'
									width={30}
									height={30}
								/>
							</li>
						))}
					</ul>

					{/* Features */}
					<h2 className='mt-16 font-semibold'>{project.linkTitle}</h2>


					<Link href={project.link}>
						<Image
							className='mt-4'
							src={project.projectIcon}
							width={30}
							height={30}
							alt='gitHub'
						/>
					</Link>

				</div>

			</div>
		</>
	)
}
