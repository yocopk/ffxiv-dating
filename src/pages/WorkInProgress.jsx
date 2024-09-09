import { Link } from "react-router-dom";

export default function WorkInProgress() {
  return (
    <div className="w-screen h-screen pt-52 bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl font-bold text-red-400 pb-3">
          WORK IN PROGRESS
        </h2>
        <p className="text-black/60 text-md pb-10">
          This page is under construction, it might take a while!
        </p>
        <img className="pb-16" src="src\assets\work-in-progress.png" alt="" />
        <Link
          className="p-3 bg-red-400 rounded-lg text-white transition-all hover:bg-black"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
