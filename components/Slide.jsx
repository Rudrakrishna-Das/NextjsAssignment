import Image from "next/image";

const Slide = () => {
  return (
    <div
      id="price"
      className="w-[80%] max-md:w-full text-white h-96 mx-auto my-6 bg-cover bg-center bg-custom-frame "
    >
      <div className="relative flex flex-col gap-3 top-[40%] max-md:top-[10%] left-[5%] w-[70%]">
        <h1 className="max-md:text-lg text-5xl">Ready To Get Started?</h1>
        <p className="text-sm">
          Risus Habient Leo Egestas Mauris Diam Eget Marbi Tempus <br /> Vulpeta
        </p>
        <button className="bg-white text-black font-bold md:flex md:items-center cursor-pointer hover:bg-slate-500 gap-3 px-4 py-2 w-[30%] max-md:px-1 max-md:text-xs  max-md:w-[50%]">
          Download app{" "}
          <Image
            src="/Vector.png"
            alt="apple"
            height={10}
            width={30}
            className="max-md:hidden"
          />{" "}
        </button>
      </div>
      <Image
        src="/Group35896.png"
        alt="apple"
        height={10}
        width={300}
        className="relative top-[-65%] left-[-14%] z-[-10]"
      />
    </div>
  );
};

export default Slide;
