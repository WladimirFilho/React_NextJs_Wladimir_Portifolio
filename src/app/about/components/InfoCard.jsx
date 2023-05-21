export const InfoCard = ({info}) => {
	return (
		<li className='relative ml-8 flex flex-col justify-center items-start gap-4 lg:w-[400px] pl-4 mb-10'>
			<div className='absolute bg-black h-[2px] w-10 top-[13px] left-[-34px]'></div>
			<h3 className='text-xl font-medium'>{info.title}</h3>
			<span className='mt-[-10px]'>{info.subtitle}</span>
			<p>{info.description}</p>
		</li>
	)
}

