import Borders from "@/components/CountryDesc/Borders";
import UndoButton from "@/components/CountryDesc/UndoButton";
import DescriptionElement from "@/components/DescriptionElement";
import { getCountry } from "@/lib/api";
import Image from "next/image";
import { Suspense } from "react";

const CountryPage = async ({ params }) => {
 const countryData = await getCountry(params.countrySlug);
 const {
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  borders,
 } = countryData;

 return (
  <div>
   <Suspense fallback={<p>Fetching data about country...</p>}>
    <UndoButton />
    <div className="px-2.5 md:grid md:grid-cols-2 md:gap-x-28 md:align-middle">
     <div className="w-full sm:w-80 h-56  md:h-96 md:w-full relative mb-11 md:mb-0 sm:right-auto sm:left-auto">
      <Image
       src={countryData.flag}
       alt={`Flag of ${name}`}
       fill
       style={{ objectFit: "cover" }}
       className="rounded-lg drop-shadow-md "
      />
     </div>
     <div className="md:self-center">
      <h2 className="text-2xl mb-4 md:text-3xl">{name.common}</h2>
      <div className="sm:flex sm:gap-x-14 ">
       <div className=" mb-8 ">
        <DescriptionElement
         title="Native Name"
         text={Object.values(name.native)[0].common}
        />
        <DescriptionElement
         title="Population"
         text={population}
        />
        <DescriptionElement
         title="Region"
         text={region}
        />
        <DescriptionElement
         title="Sub Region"
         text={subregion}
        />
        <DescriptionElement
         title="Capital"
         text={capital}
        />
       </div>
       <div>
        <DescriptionElement
         title="Top Level Domain"
         text={tld[0]}
        />
        <DescriptionElement
         title="Currencies"
         text={Object.values(currencies)[0].name}
        />
        <DescriptionElement
         title="Languages"
         text={Object.values(languages).toString()}
        />
       </div>
      </div>
      {borders && <Borders borders={borders} />}
     </div>
    </div>
   </Suspense>
  </div>
 );
};

export default CountryPage;
