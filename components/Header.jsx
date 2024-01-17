import ThemeButton from "./ThemeButton";

const Header = () => {
 return (
  <header className="shadow-lg shadow-black  py-7 sm:py-6  bg-white dark:bg-lightDark">
   <div className="container flex justify-between items-center">
    <h1>Where in the world?</h1>
    <ThemeButton />
   </div>
  </header>
 );
};

export default Header;
