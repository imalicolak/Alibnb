import countries from "world-countries";

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

// hook for countries
const useCountries = () => {
  // gets all and formats
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    //search formatted countries and find item that value matches value in getByValue
    return formattedCountries.find((item) => item.value === value);
  };
  return {
    getAll,
    getByValue,
  };
};

export default useCountries;
