import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="flex max-md:flex-col mx-auto w-[80%]">
        <Image
          src="/Frame 1.png"
          alt="image"
          width={370}
          height={400}
          className="order-1"
        />
        <div className="content pt-20 ">
          <h1 className="max-sm:text-xl text-5xl font-black">
            Make The Best <br />
            Financial Decisions
          </h1>
          <Image
            src="/Group35896.png"
            alt="design_round"
            width={250}
            height={20}
            className="absolute top-10 md:left-72 z-[-1]"
          />
          <p className="mt-4 mb-8">
            Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
            <br /> Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          <div className="container flex items-center mb-4">
            <button className="bg-black text-white rounded w-36 h-12 mr-8">
              Get Started <i className="fa-solid fa-arrow-right-long"></i>
            </button>
            <div className="video flex items-center text-xl">
              <i className="fa-regular fa-circle-play text-3xl mr-2"></i>
              <span>Watch Video</span>
            </div>
          </div>
          <Image
            src="/Group 35899.png"
            alt="design_round"
            width={250}
            height={20}
            className="absolute max-md:top-96 top-64 md:left-[61%] z-[-1]"
          />
          <Image
            src="/Group 35924 (1).png"
            alt="image"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
