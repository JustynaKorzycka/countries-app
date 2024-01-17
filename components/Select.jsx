"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

const Select = () => {
 const searchParams = useSearchParams();
 const pathname = usePathname();
 const { replace } = useRouter();

 const handleOnSelected = (e) => {
  const term = e.target.value;
  const params = new URLSearchParams(searchParams);
  if (term) {
   params.set("region", term);
  } else {
   params.delete("region");
  }

  replace(`${pathname}?${params.toString()}`);
 };

 return (
  <div className="h-full sm:justify-self-end max-w-48  drop-shadow-md">
   <select
    className="rounded-md h-full w-48  py-5 px-6 text-sm cursor-pointer dark:bg-lightDark"
    onChange={handleOnSelected}
    defaultValue={"all"}
   >
    <option
     disabled
     hidden
     className="py-2"
     value="all"
    >
     Filter by Region
    </option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
    <option value="">All Regions</option>
   </select>
  </div>
 );
};

export default Select;
