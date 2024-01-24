export default function Images() {
  const image = [
    { id: 1, path: "src/assets/images-1.png", text: "Friends" },
    { id: 2, path: "src/assets/images-2.png", text: "Love" },
    { id: 3, path: "src/assets/images-3.png", text: "Party" },
  ];
  return (
    <div className="bg-gray-100 w-full px-2 py-4 md:py-24 md:px-20 flex flex-col lg:flex-row  justify-between gap-10">
      {image.map((images) => {
        return (
          <div
            key={images.id}
            className={`bg-[url('${images.path}')] bg-cover h-[300px] overflow-hidden w-full rounded-xl bg-center flex items-end shadow-md transition-all duration-300 hover:scale-105`}
          >
            <p className="px-6 py-2 mb-8 font-bold text-white text-4xl drop-shadow-xl bg-black/60">
              {images.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}
