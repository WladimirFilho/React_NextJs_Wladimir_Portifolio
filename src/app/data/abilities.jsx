import {
	AiOutlineLaptop,
	MdMobileFriendly,
	MdOutlineTravelExplore,
	TbChairDirector,
	TbPackageExport,
	TfiRulerAlt2
} from "react-icons/all";

export const abilities = [
	{
		id: 1,
		icon: <AiOutlineLaptop size={35} className='absolute left-4 top-1'/>,
		title: 'Web Develoment',
		description: 'Passionate about Frontend development and user experience. Enthusiastic on using HTML, CSS,' +
			' JavaScript, and' +
			' frameworks like React and Next.js.',
	},
	{
		id: 2,
		icon: <MdMobileFriendly size={35} className='absolute left-4 top-1'/>,
		title: 'Mobile Development',
		description: 'Learning development for multi-platforms, using Flutter and Dart. A framework to create high-quality mobile applications that deliver seamless user' +
			' experiences.',
	},
	{
		id: 3,
		icon: <TbPackageExport size={35} className='absolute left-4 top-1'/>,
		title: 'UX/UI design',
		description: 'Love on crafting intuitive and visually appealing user interfaces that enhance user engagement and' +
			' experiences. Wireframe, prototyping, interactive mockups. Skilled in Adobe Suite and other' +
			' industry-standard design tools.',
	},
	{
		id: 4,
		icon: <TbChairDirector size={35} className='absolute left-4 top-1'/>,
		title: 'Art director',
		description: 'A deep love on creative visual design projects from concept to' +
			' completion. An eye for detail and understanding of branding and marketing strategies.',
	},
	{
		id: 5,
		icon: <TfiRulerAlt2 size={35} className='absolute left-4 top-1'/>,
		title: 'Marketing and strategies',
		description: 'Expertise in driving brand awareness, customer engagement through effective strategies. Skilled' +
			' and campaign planning, content marketing and optimization.',
	},
	{
		id: 6,
		icon: <MdOutlineTravelExplore size={35} className='absolute left-4 top-1'/>,
		title: 'User experience',
		description: 'Understanding of user design principles and usability methodologies. Experienced in user' +
			' research, testing creating personas, user flows, and enhancing user experience through' +
			' information architecture.',
	},
]