import Image from "next/image";

const Navigation = ({ sidebarOpen }) => {
  return (
    <nav className="flex justify-around bg-slate-400 py-3 text-white fixed w-full z-10">
      <Image src="/Group.png" alt="icon" height={10} width={100} />
      <ul className="flex gap-14 items-center max-sm:hidden">
        <li className="cursor-pointer font-bold hover:text-slate-800">Home</li>
        <li className="cursor-pointer font-bold hover:text-slate-800">About</li>
        <li className="cursor-pointer font-bold hover:text-slate-800">
          Pricing
        </li>
        <li className="cursor-pointer font-bold hover:text-slate-800">
          Features
        </li>
      </ul>
      <button className="bg-black text-white py-2  px-4 max-sm:hidden">
        Download
      </button>
      <Image
        src="/hamburger.svg"
        alt="hamburger"
        height={20}
        width={40}
        className="sm:hidden"
        onClick={() => sidebarOpen()}
      />
    </nav>
  );
};

export default Navigation;
