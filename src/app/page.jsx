import Projects from "./projects/page";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <div className="lg:h-[calc(100vh-170px)] h-[calc(100vh-152px)]">
        <Projects />
      </div>
    </div>
  );
}
