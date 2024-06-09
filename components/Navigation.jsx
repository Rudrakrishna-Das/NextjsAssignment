import Image from "next/image";
import Link from "next/link";

const Navigation = ({ sidebarOpen }) => {
  return (
    <nav className="flex justify-around bg-slate-400 py-3 text-white fixed w-full z-10">
      <Image src="/Group.png" alt="icon" height={10} width={100} />
      <ul className="flex gap-14 items-center max-sm:hidden">
        <Link
          href="#home"
          className="cursor-pointer font-bold hover:text-slate-800"
        >
          Home
        </Link>
        <Link
          href="#footer"
          className="cursor-pointer font-bold hover:text-slate-800"
        >
          About
        </Link>
        <Link
          href="#price"
          className="cursor-pointer font-bold hover:text-slate-800"
        >
          Pricing
        </Link>
        <Link
          href="#features"
          className="cursor-pointer font-bold hover:text-slate-800"
        >
          Features
        </Link>
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
