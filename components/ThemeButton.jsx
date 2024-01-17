"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import ico from "@/public/images/moon.svg";

const ThemeButton = () => {
 const [mounted, setMounted] = useState(false);
 const { theme, setTheme } = useTheme();

 useEffect(() => {
  setMounted(true);
 }, []);

 if (!mounted) {
  return null;
 }

 return (
  <button
   className="flex gap-1 items-center"
   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  >
   <Image
    src={ico}
    alt=""
   />
   <span className=" text-xs sm:text-base font-semibold">Dark mode</span>
  </button>
 );
};

export default ThemeButton;
