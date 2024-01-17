import Image from "next/image";
import Link from "next/link";

import DescriptionElement from "./DescriptionElement";

const Country = ({ country }) => {
 if (country) {
  return (
   <div className="flex flex-col w-64 bg-white dark:bg-lightDark drop-shadow-md hover:drop-shadow-2xl justify-self-center  rounded-md">
    <Link
     href={`/${country.name}`}
     className="relative w-full h-40 "
    >
     <Image
      src={country.flag}
      alt=""
      fill
      style={{ objectFit: "cover" }}
      className="rounded-md"
     />
    </Link>
    <div className="p-6 pb-9 flex flex-col min-h-44">
     <h2 className="grow">{country.name}</h2>
     <div className="">
      <DescriptionElement
       title="Population"
       text={country.population}
      />
      <DescriptionElement
       title="Region"
       text={country.region}
      />
      <DescriptionElement
       title="Capital"
       text={country.capital}
      />
     </div>
    </div>
   </div>
  );
 }
};

export default Country;
