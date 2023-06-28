import { BsBehance, BsGithub } from "react-icons/bs";
import { ImLinkedin2 } from "react-icons/im";
import Link from "next/link";
import ContactForm from "../contact/ContactForm";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlinePictureAsPdf } from "react-icons/md";

const Contact = () => {
  const sizeIcons = 50;
  return (
    <section className="lg:flex lg:flex-row justify-around items-start w-full">
      {/* Get in touch section */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl lg:text-6xl font-extrabold lg:mb-20 mb-7 w-full text-center">
          Get in Touch
        </h2>
        <p className=" text-2xl font-semibold">
          Hi. My name is
          <span className=" text-yellow-500 text-bold"> Wladimir</span> .
        </p>
        <p className="text-2xl font-semibold">
          I am a{" "}
          <span className=" text-yellow-500">
            {" "}
            Frontend and Mobile developer
          </span>
        </p>
        <p className=" text-2xl font-semibold ">
          with a background in Graphic designer
        </p>
        <div className="flex flex-col justify-between items-center h-full">
          <div className="flex flex-col gap-2 items-center mt-20">
            <h3 className="flex text-lg font-semibold ">wladimir@gmail.com</h3>
            <h3 className="font-semibold text-2xl">+61 449 162 083</h3>
          </div>
          <div className="flex gap-10 justify-center items-center lg:mt-20 mt-7">
            <Link href="https://github.com/WladimirFilho">
              <AiFillGithub size={sizeIcons} />
            </Link>
            <Link href="https://www.linkedin.com/in/wladimir-wiazowski-filho-70879030/">
              <AiFillLinkedin size={sizeIcons} />
            </Link>

            <Link href="https://www.behance.net/WLADIMIRWF">
              <BsBehance size={sizeIcons} />
            </Link>
            <div className="flex gap-4 items-center">
              <Link href="/assets/wladimir_filho_resume.pdf" download>
                <MdOutlinePictureAsPdf size={sizeIcons} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <ContactForm />
    </section>
  );
};
export default Contact;
