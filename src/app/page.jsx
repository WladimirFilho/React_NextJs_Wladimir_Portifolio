import {AnimatedText} from "../components/AnimatedText";

export default function Home() {
	return (
		<section
			className="flex flex-col gap-2 lg:gap-5 justify-center text-center items-center lg:text-7xl text-3xl font-bold mt-[-80px]">
			<h2>Hi! My name is Wladimir,</h2>
			<h2> and I am a</h2>
			<AnimatedText/>
			<h2>Based in Sydney</h2>
		</section>
	);
}
