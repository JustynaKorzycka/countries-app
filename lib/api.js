"use server";

import { notFound } from "next/navigation";

const API_URL = "https://restcountries.com/v3.1/";

export const getCountries = async () => {
 const response = await fetch(
  `${API_URL}all?fields=name,flags,population,region,capital`
 );
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

const getNameOfCountry = async (codes) => {
 if (!codes) return null;
 const response = await fetch(`${API_URL}alpha?codes=${codes}&fields=name`);
 if (!response.ok) {
  throw new Error("Failed to fetch data");
 }
 const names = await response.json();
 const commonNames = names.map((country) => country.name.common);
 return commonNames;
};

export const getCountry = async (countryName) => {
 const response = await fetch(
  `${API_URL}name/${countryName}?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,borders`
 );
 if (!response.ok) {
  if (response.status === 404) notFound();
  throw new Error("Failed to fetch data");
 }

 const data = await response.json();
 let searchCountry = [];
 if (data.length > 1) {
  const nameWithSpaces = countryName.replace(/%20/g, " ");
  data.forEach((country) => {
   if (country.name.common === nameWithSpaces) {
    searchCountry.push(country);
   }
  });
  searchCountry = searchCountry[0];
 } else searchCountry = data[0];

 const bordersCode = searchCountry.borders
  ? searchCountry.borders.toString()
  : null;
 const bordersName = await getNameOfCountry(bordersCode);
 const countryData = {
  name: {
   common: searchCountry.name.common,
   native: searchCountry.name.nativeName,
  },
  flag: searchCountry.flags.svg,
  population: searchCountry.population,
  region: searchCountry.region,
  capital: searchCountry.capital,
  subregion: searchCountry.subregion,
  tld: searchCountry.tld,
  currencies: searchCountry.currencies,
  languages: searchCountry.languages,
  borders: bordersName,
 };

 return countryData;
};
