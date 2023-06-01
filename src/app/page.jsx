import {AnimatedText} from "../components/AnimatedText";
import {AiFillGithub, AiFillLinkedin, BsBehance, MdOutlinePictureAsPdf} from "react-icons/all";
import Link from "next/link";

export default function Home() {
	return (
		<section
			className=" flex flex-col gap-2 lg:gap-5 justify-between text-center items-center lg:text-7xl text-3xl font-bold mt-[-80px] lg:h-[calc(100vh-88px)] h-[calc(100vh-152px)]">

			<div className='flex-1 flex flex-col justify-center'>
				<h2 className='lg:h-[84px] h-[40px]'>Hi!</h2>
				<h2 className='lg:h-[84px] h-[80px]'>My name is <p className='leading-10 lg:inline'>Wladimir</p></h2>
				<h2 className='lg:h-[84px] h-[40px]'> and I am a</h2>
				<AnimatedText/>
				<h2 className='lg:h-[84px] h-[40px]'>Based in Sydney</h2>
			</div>

			<div className='flex text-sm gap-12 justify-center'>

				<Link href='https://github.com/WladimirFilho'>
					<AiFillGithub size={30}/>
				</Link>

				<Link href='https://www.linkedin.com/in/wladimir-wiazowski-filho-70879030/'>
					<AiFillLinkedin size={30}/>
				</Link>

				<Link href='https://www.behance.net/WLADIMIRWF'>
					<BsBehance size={30}/>
				</Link>

				<Link href='/assets/wladimir_resume.pdf' download>
					<MdOutlinePictureAsPdf size={30}/>
				</Link>


			</div>
		</section>
	);
}
