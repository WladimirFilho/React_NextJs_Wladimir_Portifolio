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
		description: 'Learning about Frontend development, user experience, HTML, CSS,' +
			' JavaScript. Also frameworks like React and Next.js.',
	},
	{
		id: 2,
		icon: <MdMobileFriendly size={35} className='absolute left-4 top-1'/>,
		title: 'Mobile Development',
		description: 'Learning development for multi-platforms, using Flutter and Dart. A framework to create high-quality user' +
			' experiences.',
	},
	{
		id: 3,
		icon: <TbPackageExport size={35} className='absolute left-4 top-1'/>,
		title: 'UX/UI design',
		description: 'Love on crafting appealing user interfaces and engaging' +
			' experiences. Wireframe, prototyping, interactive mockups.',
	},
	{
		id: 4,
		icon: <TbChairDirector size={35} className='absolute left-4 top-1'/>,
		title: 'Art director',
		description: 'A love on creative visual design projects from concept ideas and marketing plan to' +
			' total completion.',
	},
	{
		id: 5,
		icon: <TfiRulerAlt2 size={35} className='absolute left-4 top-1'/>,
		title: 'Marketing and strategies',
		description: 'Expertise in creating brand awareness and customer engagement through effective strategies and' +
			' campaign planning.',
	},
	{
		id: 6,
		icon: <MdOutlineTravelExplore size={35} className='absolute left-4 top-1'/>,
		title: 'User experience',
		description: 'Understanding of User' +
			' research, testing, creating personas, user flows. How to gather information to create a great product. ',
	},
]