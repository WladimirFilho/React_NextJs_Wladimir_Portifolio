import { AnimatedText } from "../components/AnimatedText";
import SideIcons from "./components/SideIcons";
import {
  AiFillGithub,
  AiFillLinkedin,
  BsBehance,
  MdOutlinePictureAsPdf,
} from "react-icons/all";
import Link from "next/link";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="lg:h-[calc(100vh-170px)] h-[calc(100vh-152px)]">
        <Projects />
      </div>

      {/* <section className="flex flex-col gap-2 lg:gap-5 justify-between text-center items-center lg:text-7xl text-3xl font-bold mt-[-80px] lg:h-[calc(100vh-88px)] h-[calc(100vh-152px)]"> */}
      {/* <div className="flex-1 flex flex-col justify-center gap-4">
          <h2 className="lg:h-[84px] h-[40px]">Hi!</h2>
          <h2 className="lg:h-[84px] h-[40px]">My name is</h2>
          <h2 className="lg:h-[84px] h-[40px]">Wladimir Filho</h2>
          <h2 className="lg:h-[84px] h-[40px]">Frontend Dev 🧑‍💻</h2>
          <h2 className="lg:h-[84px] h-[40px]">Flutter Dev 📱</h2>
          <h2 className="lg:h-[84px] h-[40px]">Graphic Designer 🎨</h2>

          <AnimatedText />
        </div> */}

      {/* <div className="flex items-end lg:flex-col lg:absolute right-8 top-[37%] text-sm gap-12 justify-center">
        <Link href="https://github.com/WladimirFilho">
          <AiFillGithub size={30} />
        </Link>

        <Link href="https://www.linkedin.com/in/wladimir-wiazowski-filho-70879030/">
          <AiFillLinkedin size={30} />
        </Link>

        <Link href="https://www.behance.net/WLADIMIRWF">
          <BsBehance size={30} />
        </Link>

        <div className="flex gap-4 items-center">
          <h2 className="lg:block hidden"> Resume -&gt; </h2>
          <Link
            href="/assets/wladimir_filho_resume_and_cover_letter.pdf"
            download
          >
            <MdOutlinePictureAsPdf size={30} />
          </Link>
        </div>
      </div> */}
      {/* <SideIcons /> */}
      {/* </section> */}
    </div>
  );
}
