import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex flex-col justify-center gap-8 my-4 w-full max-lg:w-[80%] max-lg:mx-auto"
    >
      <div className="flex justify-around w-full max-lg:gap-4 max-lg:flex-col">
        <ul className="flex flex-col gap-5 max-lg:flex-row max-lg:justify-around max-md:flex-col">
          <li>
            <Image
              src="/Group.png"
              alt="Logo"
              width={100}
              height={100}
              id="Logo"
            />
          </li>
          <li className="flex items-center">
            <Image
              src="/Frame (4).png"
              alt="Email Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            Help@Frybix.com
          </li>
          <li className="flex items-center">
            <Image
              src="/Frame (5).png"
              alt="Phone Icon"
              width={24}
              height={24}
              className="mr-2"
            />
            +1 234 456 678 89
          </li>
        </ul>

        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-extrabold">Links</h1>
          <ul className="flex flex-col flex-wrap gap-3 max-lg:flex-row max-lg:justify-around">
            <li>Home</li>
            <li>About Us</li>
            <li>Booking</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-extrabold">Legal</h1>
          <ul className="flex flex-col flex-wrap gap-3 max-lg:flex-row max-lg:justify-around">
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-extrabold">Product</h1>
          <ul className="flex flex-col flex-wrap gap-3 max-lg:flex-row max-lg:justify-around">
            <li>Take Tour</li>
            <li>Live Chat</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 ">
          <h1 className="text-xl font-extrabold">Newsletter</h1>
          <h2>Stay Up to Date</h2>
          <ul className="flex flex-col gap-3 max-lg:flex-row">
            <li>
              <div className="bg-white h-20 w-[80%] flex flex-col gap-4 justify-center rounded">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-transparent border-2 border-slate-600 text-gray-600 px-4 w-full"
                />
                <button className="bg-black text-white px-4 py-2 rounded">
                  Subscribe
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <hr className="fade-hr w-full border-0 h-px bg-gradient-to-r from-transparent via-black to-transparent mt-4 mb-2" />

      <center className="w-full">
        <p className="font-semibold">
          Copyright 2022 Uifry.com All Rights Reserved
        </p>
      </center>
    </footer>
  );
};

export default Footer;
