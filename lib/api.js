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
 const bordersCode = data[0].borders ? data[0].borders.toString() : null;
 const bordersName = await getNameOfCountry(bordersCode);
 const countryData = {
  name: { common: data[0].name.common, native: data[0].name.nativeName },
  flag: data[0].flags.svg,
  population: data[0].population,
  region: data[0].region,
  capital: data[0].capital,
  subregion: data[0].subregion,
  tld: data[0].tld,
  currencies: data[0].currencies,
  languages: data[0].languages,
  borders: bordersName,
 };

 return countryData;
};
