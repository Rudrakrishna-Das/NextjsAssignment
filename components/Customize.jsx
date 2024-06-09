import Image from "next/image";

const Customize = () => {
  return (
    <div className="flex max-md:flex-col items-center w-[80%] mx-auto">
      <div className="relative">
        <Image
          src="/Group 35937 (1).png"
          alt="main image"
          width={1550}
          height={400}
        />
        <Image
          src="/Group 35930.png"
          alt="design_round"
          width={750}
          height={750}
          className="absolute top-[10%] z-[-1]"
        />
      </div>
      <div className="pl-6">
        <div className="flex items-center mb-4">
          <Image src="/Group 35899 (2).png" alt="icon" width={40} height={40} />
          <p className="ml-2 font-extrabold text-xl">Fully Customizable</p>
        </div>
        <p className="pr-24">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </div>
  );
};

export default Customize;
