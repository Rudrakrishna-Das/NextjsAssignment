import Image from "next/image";

const FAQ = () => {
  const isColoredIndexSmall = (index) => {
    return index % 2 === 0;
  };
  const isColoredIndexLarge = (index) => {
    const mod = index % 4;
    return mod === 0 || mod === 3;
  };
  return (
    <div className="relative flex flex-col w-[80%] mx-auto">
      <p className="text-red-500">FAQ</p>
      <h1 className="font-extrabold text-3xl">
        Frequently Asked <br /> Questions
      </h1>
      <div className="grid max-md:grid-cols-1 grid-rows-3  grid-cols-2 gap-4 w-[90%] mt-5">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <p
            key={index}
            className={`rounded-lg p-5 font-normal ${
              isColoredIndexLarge(index) ? "md:bg-red-500 md:text-white" : ""
            } ${
              isColoredIndexSmall(index)
                ? "max-md:bg-red-500 max-md:text-white"
                : ""
            }`}
          >
            <span className="inline-block text-lg font-extrabold">
              The Best Financial Accounting{index}
              <br /> App Ever!
            </span>
            <br />
            <br />
            &quot;Arcu at dictum sapien, mollis. Vulputate sit id
            <br /> accumsan, ultricies. In ultrices malesuada elit mauris.&quot;
          </p>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
