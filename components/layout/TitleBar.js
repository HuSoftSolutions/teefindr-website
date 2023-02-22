import Logo from "../../public/logo.svg";
import Image from "next/image";

function MainNavigation() {
  return (
    <header className="flex h-[60px] w-full bg-slate-800 text-primary items-center justify-between px-2">
      <div className="flex items-center cursor-pointer  transition duration-200 transform hover:scale-110">
        <div className="">
          <Image src={Logo} className="w-10 h-10" alt="logo" />
        </div>
        <span className="text-xl text-gray-300">TeeFindr</span>
      </div>
      <nav className="px-1 font-thin flex">
        <ul className="mx-1 hover:underline cursor-pointer hover:text-gray-400">
          request a demo
        </ul>
      </nav>
    </header>
  );
}



export default MainNavigation;
