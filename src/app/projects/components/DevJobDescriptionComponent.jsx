import Image from "next/image";
import Link from "next/link";

export const DevJobDescriptionComponent = ({ project }) => {
  return (
    <>
      <div className="lg:w-[40%]">
        <div>
          <h1 className="projectTitle">{project.title}</h1>
        </div>
        <div>
          <h2 className="projectSubtitle">Idea</h2>
          <p className="projectDescription">{project.ideaDescription}</p>
        </div>
        <div>
          <h2 className="projectSubtitle">Features</h2>

          {/* Features */}
          <ul>
            {project.features?.map((feature, index) => (
              <li className="mb-4 list-disc" key={index}>
                {feature}
              </li>
            ))}
          </ul>

          {/* Stack Tech */}
          <ul className="mt-12 flex gap-8">
            {project.techStack.map((item, index) => (
              <li key={index}>
                <Image
                  priority
                  unoptimized={true}
                  src={item}
                  alt="tech stack"
                  width={50}
                  height={50}
                />
              </li>
            ))}
          </ul>

          {/* Features */}
          <h2 className="mt-16 text-2xl font-semibold">{project.linkTitle}</h2>

          <div className="flex gap-8">
            {project.linkVercel === "" ? null : (
              <Link href={project.linkVercel}>
                <Image
                  priority
                  unoptimized={true}
                  className="mt-8"
                  src={project.projectIconVercel}
                  width={50}
                  height={50}
                  alt="link to project"
                />
              </Link>
            )}

            <Link href={project.linkGit}>
              <Image
                priority
                unoptimized={true}
                className="mt-8"
                src={project.projectIconGit}
                width={50}
                height={50}
                alt="link to project"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
