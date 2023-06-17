import Image from "next/image";

export const ImageComponent = ({ project }) => {
  return (
    <div className="lg:w-[60%]">
      {project.images.map((image, index) => (
        <Image
          alt="image"
          className="w-full h-auto mb-12"
          key={index}
          width={2000}
          height={2000}
          src={image}
          priority
        />
      ))}
    </div>
  );
};
