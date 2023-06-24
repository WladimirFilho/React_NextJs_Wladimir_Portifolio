import React from "react";
import { BsCircleFill } from "react-icons/all";
import { certifications } from "../../data/certifications";

export const CertificationCardsSection = () => {
  return (
    <div className="lg:grid lg:grid-cols-1 gap-16 flex flex-col">
      {certifications.map((ability) => (
        <div className="flex gap-6" key={ability.id}>
          <div className="relative">
            <BsCircleFill className="text-yellow-500" size={45} />
            {ability.icon}
          </div>

          <div className="flex flex-col lg:w-[500px]">
            <h3 className="font-bold lg:text-3xl lg:mb-6">{ability.title}</h3>
            <h3>{ability.description}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
