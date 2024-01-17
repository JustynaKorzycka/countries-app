import { getAllCountries } from "@/lib/api";
import { Suspense } from "react";

import CountriesGrid from "@/components/CountriesGrid";

const Countries = async () => {
 const allCountries = await getAllCountries();
 return <CountriesGrid countries={allCountries} />;
};

export default function Home() {
 return (
  <>
   <Suspense fallback={<p>Fetching countries...</p>}>
    <Countries />
   </Suspense>
  </>
 );
}
