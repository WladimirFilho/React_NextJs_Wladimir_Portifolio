import ReactPlayer from "react-player";

export function VideoPlayer({ videoLink }) {
  return (
    <div className=" w-full">
      {" "}
      <ReactPlayer url={videoLink} />
    </div>
  );
}
