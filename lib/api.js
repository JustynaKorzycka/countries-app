"use server";

const API_URL = "https://restcountries.com/v3.1/all";

export const getCountries = async () => {
 const response = await fetch(API_URL);
 if (!response.ok) {
  throw new Error("Failed to fetch data");
 }
 const data = await response.json();
 const allCountries = await data.map((country) => {
  return {
   name: country.name.common,
   flag: country.flags.svg,
   population: country.population,
   region: country.region,
   capital: country.capital,
  };
 });

 return allCountries;
};

export const getSearchCountries = async (nameQuery, regionQuery) => {
 const allCountries = await getCountries();
 let selectedCountries = [];
 await allCountries.forEach((country) => {
  if (
   (country.name.toLowerCase().includes(nameQuery.toLowerCase()) ||
    !nameQuery) &&
   (country.region === regionQuery || !regionQuery)
  )
   selectedCountries.push(country);
 });

 return selectedCountries;
};
