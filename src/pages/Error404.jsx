import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div className="bg-[url('src/assets/ffxiv-landscape-404.jpg')] h-screen bg-center bg-cover">
      <div className="flex flex-col justify-center items-center pt-52">
        <img
          className=" h-28 mb-4"
          src="src\assets\ffxiv-dating-logo-black.png"
          alt=""
        />
        <h2 className="text-9xl font-bold text-red-400">404</h2>
        <p className="pb-4 text-xl font-medium text-black/80">Page not found</p>
        <p className="pb-10 text-md text-black/80">
          Something went wrong, the page doesn't exist.
        </p>
        <Link
          className="p-3 bg-red-400 rounded-lg text-white transition-all hover:bg-black"
          to="/"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
