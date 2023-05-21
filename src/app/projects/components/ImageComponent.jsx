import Image from "next/image";

export const ImageComponent = ({project}) => {
	return (

		<div className='w-[60%]'>
			{project.images.map((image, index) =>
				<Image
					className='w-full mb-12'
					key={index}
					width={1000}
					height={1000}
					src={image}
				/>
			)}
		</div>

	)
}
