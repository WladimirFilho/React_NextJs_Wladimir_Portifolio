import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, type }) => {
  return (
    <li className="relative group overflow-hidden">
      <Link href={`/projects/${type}/${project.id}`}>
        <div className="hidden w-full h-full absolute group-hover:flex flex-col justify-center items-center bg-[rgba(255,255,255,0.9)]">
          <h3 className="mb-4 text-xl font-semibold">{project.title}</h3>
          <ul className="flex">
            {project.techStack.map((stackImage, index) => (
              <li className="p-3" key={index}>
                <Image
                  width={30}
                  height={30}
                  src={stackImage}
                  alt="stack image"
                />
              </li>
            ))}
          </ul>
        </div>

        <Image
          alt="project"
          className="w-full h-[300px] object-cover border border-b-neutral-200 "
          width={700}
          height={700}
          src={project.images[0]}
        />
      </Link>
    </li>
  );
};
export default ProjectCard;
