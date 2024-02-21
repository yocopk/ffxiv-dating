import { Link } from "react-router-dom";

export default function ContactOption() {
  const option = [
    {
      id: 0,
      icon: "chatbubbles-outline",
      title: "Website support",
      text: "Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.",
      link: "Contact us",
    },
    {
      id: 1,
      icon: "bug-outline",
      title: "Bug reports",
      text: "Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.",
      link: "Report a bug",
    },
    {
      id: 2,
      icon: "hammer-outline",
      title: "Technical support",
      text: "Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor risus blandit. Nunc a in lorem vel iaculis porttitor.",
      link: "Join our Discord",
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col items-center gap-14 w-screen py-20 justify-center pb-8">
      {option.map((options) => {
        return (
          <div
            className="flex gap-3 p-10 bg-white rounded-lg shadow-md"
            key={options.id}
          >
            <div className="p-2 bg-red-400 rounded-lg text-2xl h-9 text-white text-center flex items-center">
              <ion-icon name={`${options.icon}`}></ion-icon>
            </div>

            <div className="flex flex-col justify-start gap-2">
              <h3 className="text-2xl text-black/80 font-medium">
                {options.title}
              </h3>
              <p className="text-black/60">{options.text}</p>
              <Link
                to=""
                className="flex justify-start gap-2 items-center text-red-400 transition-all hover:text-black md:w-[25%]"
              >
                {options.link}{" "}
                <span className="flex">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </Link>
            </div>
          </div>
        );
      })}
      {/* <div className="p-2 bg-red-400 rounded-lg text-2xl h-9 text-white text-center flex items-center">
        <ion-icon name="chatbubbles-outline"></ion-icon>
      </div> */}

      {/* <div className="flex flex-col justify-start gap-2">
        <h3 className="text-xl text-black font-medium">Support</h3>
        <p className="text-black/60">
          Ut cursus est ut amet. Lobortis eget egestas leo vitae eget porttitor
          risus blandit. Nunc a in lorem vel iaculis porttitor.
        </p>
        <button className="flex justify-start gap-2 items-center text-red-400 transition-all hover:text-black">
          Contact us{" "}
          <span className="flex">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </span>
        </button>
      </div> */}
    </div>
  );
}
