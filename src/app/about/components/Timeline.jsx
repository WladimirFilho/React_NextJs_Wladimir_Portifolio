import { BsCircleFill } from "react-icons/all";
import { InfoCard } from "./InfoCard";

const Timeline = ({ title, icon, infoData }) => {
  console.log(infoData);
  return (
    <div className="w-[380px]">
      <div className="flex items-center justify-start gap-4">
        <div className="relative">
          <BsCircleFill className="text-yellow-500" size={45} />
          {icon}
        </div>
        <h3 className="text-3xl font-semibold">{title}</h3>
      </div>
      <div className="border-l-2 border-black mt-1 h-12 ml-6" />
      <ul className="border-l-2 border-black ml-6">
        {infoData?.map((info, index) => (
          <InfoCard key={index} info={info} />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
