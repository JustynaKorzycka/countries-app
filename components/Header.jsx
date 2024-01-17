import Image from "next/image";
import ico from "@/public/images/moon.svg";

const Header = () => {
 return (
  <header className="shadow-lg shadow-black  py-7 sm:py-6  bg-white">
   <div className="container flex justify-between items-center">
    <h1>Where in the world?</h1>
    <button className="flex gap-1 items-center">
     <Image
      src={ico}
      alt=""
     />
     <span className=" text-xs sm:text-base font-semibold">Dark mode</span>
    </button>
   </div>
  </header>
 );
};

export default Header;
