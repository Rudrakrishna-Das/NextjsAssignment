// components/Features.js
import Image from "next/image";

export default function Features() {
  return (
    <div id="features" className="flex w-[83%] mx-auto max-md:flex-col z-[-1]">
      <div
        className="relative flex-shrink-0"
        style={{
          backgroundImage: "url(/Group 35930.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "650px",
          backgroundPosition: "-5% 0%",
        }}
      >
        <div className="relative right-4 max-md:mb-16">
          <Image
            src="/Group 35930.png"
            alt="design_round"
            width={750}
            height={750}
            className="absolute top-[10%] z-[-1]"
          />
          <Image
            src="/Group 35898.png"
            alt="features img"
            width={400}
            height={400}
          />
          <div>
            <Image
              src="/iPhone-13-Pro-Front.png"
              alt="features img"
              width={350}
              height={300}
              className="absolute left-[15%] top-[-5%]"
            />
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <p className="text-red-500 font-bold">FEATURES</p>
        <h1 className="font-extrabold text-3xl">Uifry Premium</h1>

        <div className="heading flex items-center gap-1 my-4">
          <Image src="/Icon.png" alt="icon" width={24} height={24} />
          <p className="font-bold inline">Budgeting Intervals</p>
        </div>
        <p className="bullets">
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>

        <div className="heading flex items-center gap-1 my-4">
          <Image src="/cube-02.png" alt="icon" width={24} height={24} />
          <p className="font-bold inline">Budgeting Intervals</p>
        </div>
        <p className="bullets">
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>

        <div className="heading flex items-center gap-1 my-4">
          <Image src="/cube-04.png" alt="icon" width={24} height={24} />
          <p className="font-bold inline">Budgeting Intervals</p>
        </div>
        <p className="bullets">
          Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
      </div>
    </div>
  );
}
