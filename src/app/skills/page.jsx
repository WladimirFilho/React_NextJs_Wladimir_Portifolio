import React from "react";
import { ThingsCardsSection } from "../about/components/ThingsCardsSection";
import { CertificationCardsSection } from "../about/components/CertificationCardsSection";

const ThingsIDo = () => {
  return (
    <div className=" lg:mx-52 w-full flex justify-between mt-40 ">
      <section className="flex justify-start flex-col">
        <h2 className="text-4xl lg:text-7xl font-bold mb-40">Extra skills</h2>
        <ThingsCardsSection />
      </section>
      <section className="flex justify-start flex-col">
        <h2 className="text-4xl lg:text-7xl font-bold mb-40">Certifications</h2>
        <CertificationCardsSection />
      </section>

      {/* Header section */}
      {/* <section className="w-full lg:px-16 min-h-[calc(100vh-88px)] flex flex-col justify-around items-center">
        <h1 className="mainTitle lg:mt-18 mt-18">Extra Skills</h1>
        <div className="max-w-[900px] mx-auto flex flex-col items-center">
          <p className="text-center lg:text-2xl text-xl lg:mt-0 mt-20 lg:leading-relaxed ">
            After over 10 years of experiences as an{" "}
            <span className="font-semibold">Art Director 🎨 </span>
            working with range of products and clients, I made the decision to
            change my career path and pursue one of my passions:
            <span className="font-semibold">
              {" "}
              the magnificent world of developing applications 🧑‍💻.
            </span>
          </p>
        </div>

   
        <div className="flex flex-col items-center lg:mt-0 mt-20">
        
          <ThingsCardsSection />
        </div>
      </section> */}

      {/* Certifications cards */}
      {/* <section className="lg:px-16 flex flex-col justify-around items-center mb-32">
        <h2 className="mainTitle mt-20 mb-20 lg:mb-28">Certifications</h2>
        
      </section> */}
    </div>
  );
};

export default ThingsIDo;
