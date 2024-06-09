import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="testimonials py-16 w-[80%] mx-auto">
      <div className="text-center mb-10">
        <p className="font-bold">TESTIMONIALS</p>
        <h1 className="font-extrabold text-3xl md:text-4xl">
          What Our Users <br /> Say About Us?
        </h1>
      </div>
      <div className="flex max-md:flex-col items-center">
        <div className="">
          <Image
            src="/Group 1000002356.png"
            alt="Background"
            height={100}
            width={350}
            className="absolute "
          />
          <div className="relative">
            <Image
              src="/Group 1000002332.png"
              alt="User"
              height={1200}
              width={1200}
            />
          </div>
        </div>
        <div className="md:ml-10 text-center md:text-left mt-8 md:mt-0">
          <div className="heading">
            <p className="font-extrabold text-2xl md:text-3xl inline-block">
              The Best Financial Accounting
              <br /> App Ever!
            </p>
          </div>
          <p className="mt-4 md:pr-24">
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </p>
          <br />
          <Image src="/Group 35917.png" alt="Rating" height={100} width={100} />
          <p className="font-bold mt-4">Nick Jonas</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
