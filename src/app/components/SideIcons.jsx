import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  BsBehance,
  MdOutlinePictureAsPdf,
} from "react-icons/ai";

const SideIcons = () => {
  return (
    <div>
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
    </div>
  );
};

export default SideIcons;
