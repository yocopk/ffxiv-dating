export default function ContactOption() {
  return (
    <div className="bg-white flex gap-3 w-screen pt-32 justify-center pb-8">
      <div className="p-2 bg-red-400 rounded-lg text-xl h-9 text-white text-center flex items-center">
        <ion-icon name="chatbubbles-outline"></ion-icon>
      </div>

      <div className="flex flex-col justify-start gap-2">
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
      </div>
    </div>
  );
}
