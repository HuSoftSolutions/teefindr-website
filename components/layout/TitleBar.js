import Logo from "../../public/logo.svg";
import Image from "next/image";

function MainNavigation() {
  return (
    <header className="flex h-[60px] w-full bg-white text-primary items-center justify-between px-2">
      <div className="flex items-center cursor-pointer hover:text-gray-700">
        <div className="">
          <Image src={Logo} className="w-10 h-10" alt="logo" />
        </div>
        <span className="text-xl">TeeFindr</span>
      </div>
      <nav className="px-1 font-thin flex">
        <ul className="mx-1 hover:underline cursor-pointer hover:text-gray-700">
          request a demo
        </ul>
      </nav>
    </header>
  );
}



export default MainNavigation;
