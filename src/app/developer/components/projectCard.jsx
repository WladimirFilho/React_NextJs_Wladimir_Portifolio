import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, type }) => {
  return (
    <li className="relative group overflow-hidden">
      <Link href={`/${type}/${project.id}`}>
        <div className="hidden w-full h-full absolute group-hover:flex flex-col justify-center items-center bg-[rgba(255,255,255,0.9)]">
          <h3 className="mb-4 text-3xl font-semibold">{project.title}</h3>
          <ul className="flex">
            {project.techStack.map((stackImage, index) => (
              <li className="p-3" key={index}>
                <Image
                  unoptimized={true}
                  width={60}
                  height={60}
                  src={stackImage}
                  alt="stack image"
                />
              </li>
            ))}
          </ul>
        </div>

        <Image
          unoptimized={true}
          alt="project"
          className="w-full h-[400px] object-cover border border-b-neutral-100  "
          width={700}
          height={700}
          src={project.images[0]}
        />
      </Link>
    </li>
  );
};
export default ProjectCard;
