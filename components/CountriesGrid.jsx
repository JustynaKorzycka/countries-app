import Country from "./Country";

const CountriesGrid = ({ countries }) => {
 return (
  <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 justify-between gap-4 gap-y-16 ">
   {countries.length > 0 ? (
    countries.map((country, index) => (
     <Country
      key={index}
      country={country}
     />
    ))
   ) : (
    <p>There is no such country</p>
   )}
  </div>
 );
};

export default CountriesGrid;
