import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({project}) => {

    return (
        <li className='relative group'>
            <Link href={`/projects/${project.id}`}>
                <div
                    className='hidden w-full h-full absolute group-hover:flex flex-col justify-center items-center bg-[rgba(255,255,255,0.9)]'>
                    <h3 className='mb-4 text-xl font-semibold'>{project.title}</h3>
                    <ul className='flex'>
                        {project.techStack.map((stackImage, index) =>
                            <li key={index}>
                                <Image
                                    width={30}
                                    height={30}
                                    src={stackImage}
                                    alt='stack image'/>
                            </li>)}
                    </ul>
                </div>
                <Image className='w-full h-full object-cover'
                       width={300}
                       height={300}
                       src={project.images[0]}
                       alt="project"/>
            </Link>
        </li>
    )
}
export default ProjectCard;