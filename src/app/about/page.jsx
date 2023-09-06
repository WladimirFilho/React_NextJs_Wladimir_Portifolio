import { workExperience } from "../data/workExperience";
import { education } from "../data/education";
import Timeline from "./components/Timeline";
import {
  FaRegEdit,
  MdOutlinePictureAsPdf,
  TfiRulerAlt2,
} from "react-icons/all";
import React from "react";
import { certifications } from "../data/certifications";
import Link from "next/link";

export const metadata = {
  title: "About page",
};

const About = () => {
  return (
    <div className="flex flex-col">
      <section className="lg:min-h-[calc(100vh-88px)] min-h-[calc(100vh-152px)] flex flex-col justify-center items-center">
        <h2 className="mainTitle mt-20">Education & experience</h2>
        <Link
          target="_blank"
          href="/assets/wladimir_filho_dev_resume.pdf"
          download
          className="mt-20 mb-20 lg:mb-40 flex flex-row justify-center items-center gap-4 font-semibold rounded-lg border-yellow-400 hover:bg-slate-100 px-8 py-4 border-4 lg:mt-20"
        >
          {" "}
          Download my resume in PDF
          <MdOutlinePictureAsPdf size={40} />
        </Link>

        <div className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-start gap-32">
          <div className="flex flex-col">
            <Timeline
              title="Education"
              icon={
                <TfiRulerAlt2 size={40} className="absolute left-4 top-3" />
              }
              infoData={education}
            />
          </div>
          <div className="flex">
            <Timeline
              title="Work Experience"
              icon={<FaRegEdit size={40} className="absolute left-4 top-3" />}
              infoData={workExperience}
            />
          </div>
          <div className="flex">
            <Timeline
              title="Certifications"
              icon={<FaRegEdit size={40} className="absolute left-4 top-3" />}
              infoData={certifications}
            />
          </div>
        </div>
      </section>

      <div className=""></div>
    </div>
  );
};
export default About;
