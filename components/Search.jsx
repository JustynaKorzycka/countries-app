"use client";

import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import searchIco from "@/public/images/search.svg";

const Search = () => {
 const searchParams = useSearchParams();
 const pathname = usePathname();
 const { replace } = useRouter();

 const handleOnSearch = (e) => {
  const term = e.target.value;
  const params = new URLSearchParams(searchParams);
  if (term) {
   params.set("name", term);
  } else {
   params.delete("name");
  }
  replace(`${pathname}?${params.toString()}`);
 };

 return (
  <div className="relative drop-shadow-md max-w-md ">
   <label hidden>Search for a country</label>
   <input
    type="text"
    className="w-full block rounded-md py-5 px-16 text-sm dark:bg-lightDark"
    placeholder="Search for a country..."
    onChange={handleOnSearch}
    defaultValue={searchParams.get("query")?.toString()}
   />
   <Image
    src={searchIco}
    alt=""
    className={`absolute top-2/4 left-5 -translate-y-1/2 `}
   />
  </div>
 );
};

export default Search;
