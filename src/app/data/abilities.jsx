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
		description: 'Passionate about frontend development and user experience, specializing in creating websites using HTML, CSS, JavaScript, and frameworks like React and Next.js. Eager to expand skills in utilizing tools like Tailwind, Bootstrap, and Sass to enhance web development projects.',
	},
	{
		id: 2,
		icon: <MdMobileFriendly size={35} className='absolute left-4 top-1'/>,
		title: 'Mobile Development',
		description: 'Passionate about mobile app development for multi-platforms, using Flutter and Dart programming' +
			' languages. A cross-platform framework, to create high-quality mobile applications that deliver seamless user' +
			' experiences.',
	},
	{
		id: 3,
		icon: <TbPackageExport size={35} className='absolute left-4 top-1'/>,
		title: 'UX/UI design',
		description: 'Adept at crafting intuitive and visually appealing user interfaces that enhance user engagement and satisfaction. Proficient in user-centered design principles, wireframing, prototyping, and creating interactive mockups. Skilled in Adobe Creative Suite and other industry-standard design tools.',
	},
	{
		id: 4,
		icon: <TbChairDirector size={35} className='absolute left-4 top-1'/>,
		title: 'Art director',
		description: 'Ability to lead creative teams and oversee visual design projects from concept to completion.' +
			' Strong eye for detail and a keen understanding of branding and marketing strategies. Experienced in creating compelling visual assets, including graphics, illustrations, and multimedia content.',
	},
	{
		id: 5,
		icon: <TfiRulerAlt2 size={35} className='absolute left-4 top-1'/>,
		title: 'Marketing and strategies',
		description: 'Expertise in driving brand awareness, customer acquisition, and engagement through effective strategies. Skilled in research, competitor analysis, and campaign planning. Proficient in social media, content marketing, and email marketing optimization.',
	},
	{
		id: 6,
		icon: <MdOutlineTravelExplore size={35} className='absolute left-4 top-1'/>,
		title: 'User experience',
		description: 'Understanding of user design principles and usability methodologies. Experienced in user' +
			' research, testing, and gathering insights for informed design decisions. Skilled in creating personas, user flows, and enhancing user experience through information architecture.',
	},
]