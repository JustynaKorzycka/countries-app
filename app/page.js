import { getSearchCountries } from "@/lib/api";
import { Suspense } from "react";

import CountriesGrid from "@/components/CountriesGrid";
import Search from "@/components/Search";
import Select from "@/components/Select";

const Countries = async ({ nameQuery, regionQuery }) => {
 const selectedCountries = await getSearchCountries(nameQuery, regionQuery);
 return <CountriesGrid countries={selectedCountries} />;
};

export const metadata = {
 title: "Find Country ",
 description: "Where in the world?",
};

export default function Home({ searchParams }) {
 const nameQuery = searchParams?.name || "";
 const regionQuery = searchParams?.region || "";
 return (
  <>
   <div className="grid w-full grid-cols-1 sm:grid-cols-2  justify-between  mb-10 gap-y-10">
    <Search />
    <Select />
   </div>
   <Suspense fallback={<p>Fetching countries...</p>}>
    <Countries
     nameQuery={nameQuery}
     regionQuery={regionQuery}
    />
   </Suspense>
  </>
 );
}
