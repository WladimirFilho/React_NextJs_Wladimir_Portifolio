import './animeted_text.css'

export const AnimatedText = () => {
	return (

		<h2 className='text-3xl lg:text-7xl font-bold text-center text-yellow-500'>
			<div className='flex flex-col items-center lg:h-[84px] h-[40px] overflow-hidden w-full '>
				<span className='item'>Frontend learner</span>
				<span className='item'>Junior React Dev</span>
				<span className='item'>Junior Flutter Dev</span>
				<span className='item'>UX/UI Designer</span>
				<span className='item'>Senior Art Director</span>
			</div>
		</h2>
	)
}
