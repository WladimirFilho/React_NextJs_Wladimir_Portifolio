import Image from "next/image";

const Stack = ({title, images}) => {
	return (
		<div className="flex justify-start items-center gap-6 ">
			<h3 className="w-32 border-r-[1px] border-r-black font-medium">
				{title}
			</h3>
			<ul className="flex justify-start items-center gap-6">
				{images &&
					images.map((image, index) => (
						<li key={index}>
							<Image alt='stack' src={image}/>
						</li>
					))}
			</ul>
		</div>
	);
};

export default Stack;
