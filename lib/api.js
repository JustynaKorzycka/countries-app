"use server";

const API_URL = "https://restcountries.com/v3.1/";

export const getAllCountries = async () => {
 const response = await fetch(`${API_URL}/all`, {});
 if (!response.ok) {
  throw new Error("Failed to fetch data");
 }
 const data = await response.json();
 const neededData = await data.map((country) => {
  return {
   name: country.name.common,
   flag: country.flags.svg,
   population: country.population,
   region: country.region,
   capital: country.capital,
   id: country.cca3,
  };
 });
 return neededData;
};
