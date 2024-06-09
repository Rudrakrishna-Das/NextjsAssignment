import Image from "next/image";

const Advantages = () => {
  return (
    <div className="advantages flex max-md:flex-col justify-between items-center w-[80%] mx-auto my-10">
      <div>
        <p className="text-red-500 font-bold">ADVANTAGES</p>
        <h1 className="font-extrabold text-3xl">Why Choose Uifry?</h1>
        <div className="heading flex items-center">
          <Image src="/Group 35899 (1).png" alt="icon" height={40} width={30} />
          <p className="ml-2 font-medium text-xl">Clever Notifications</p>
        </div>
        <p>
          Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies.
          In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et
          Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit
          Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien,
          Suspendisse Aliquam.
        </p>
      </div>
      <div
        className="relative float-right"
        style={{
          backgroundImage: `url(/Group 35931.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "650px",
          backgroundPosition: "-100% 100%",
        }}
      >
        <div className="relative right-4">
          <Image
            src="/Group 35898.png"
            alt="features img"
            height={40}
            width={800}
          />
          <div className="">
            <Image
              src="/iPhone-13-Pro-Front-2.png"
              alt="features img"
              height={40}
              width={400}
              className="absolute top-[-10%] right-[-16%]"
            />
            <Image
              src="/Group 35930.png"
              alt="design_round"
              width={750}
              height={750}
              className="absolute top-[10%] right-[15%] z-[-1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
