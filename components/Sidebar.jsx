const Sidebar = () => {
  return (
    <aside className="bg-slate-400 flex flex-col gap-5 items-center text-white h-screen py-14 fixed top-0 left-0 w-52 md:hidden">
      <ul className="flex flex-col gap-14 items-center">
        <li className="cursor-pointer font-bold">Home</li>
        <li className="cursor-pointer font-bold">About</li>
        <li className="cursor-pointer font-bold">Pricing</li>
        <li className="cursor-pointer font-bold hover:text-slate-800">
          Features
        </li>
      </ul>
      <button className="bg-black text-white py-2 px-4">Download</button>
    </aside>
  );
};

export default Sidebar;
