import { Link } from "react-router-dom";

export default function NewsTab() {
  return (
    <div className="bg-white px-4 lg:px-52 py-20 flex justify-center">
      <div className="flex items-center flex-col lg:flex-row">
        <img
          className="rounded-lg md:max-w-[500px]"
          src="https://preview.redd.it/h9mdueop31471.jpg?width=640&crop=smart&auto=webp&s=d44d7e15cc22c35b09e591fb69fb6ad71e9a7bcc"
          alt=""
        />
        <div className="flex flex-col ml-4 p-3 gap-3">
          <h3 className="text-3xl text-black font-medium mx-auto lg:mx-0">
            New couple born in Eorzea!
          </h3>
          <p className="text-black">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo sit
            ad mollitia nisi veniam, pariatur atque hic? Corporis a, sint,
            perferendis consectetur nisi enim non ab incidunt, eos deleniti quo?
          </p>
          <Link
            to="/news"
            className="px-2 py-3 rounded-lg bg-red-500 w-24 text-white md:mx-auto lg:mx-0 transition-all hover:bg-black hover:text-white"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}
