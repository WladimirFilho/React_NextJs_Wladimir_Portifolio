import Image from "next/image";

export const ImageComponent = ({ project }) => {
  return (
    <div className="lg:w-[60%]">
      {project.images.map((image, index) => (
        <Image
          key={image.id}
          unoptimized={true}
          alt="images"
          className="w-full h-auto mb-12"
          width={2000}
          height={2000}
          src={image}
          priority
        />
      ))}

      {project.video === "" ? null : (
        <>
          <video width="950" height="500" controls>
            <source src={project.video} type="video/mp4" />
          </video>
        </>
      )}
    </div>
  );
};
