import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { CountryList, Filter, Loading, Search } from "../components";
import { CountryNodeProps, HomeCountryNodeProps } from "../utils/Props";

import { COUNTRIES_INFO } from "../utils/schema";

const REGIONS = [
  { id: 1, name: "All" },
  { id: 2, name: "Africa" },
  { id: 3, name: "Americas" },
  { id: 4, name: "Asia" },
  { id: 5, name: "Europe" },
  { id: 6, name: "Oceania" },
  { id: 7, name: "Polar" },
];

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CountryNodeProps[]>();
  const [selectregion, setSelectRegion] = useState(REGIONS[0]);

  const { data, loading, error } =
    useQuery<HomeCountryNodeProps>(COUNTRIES_INFO);

  const countries = data?.countries?.edges;

  useEffect(() => {
    const filteredCountries =
      search !== ""
        ? countries?.filter((country) =>
            country?.node.name
              .toLowerCase()
              .includes(search.toLocaleLowerCase())
          )
        : countries;
    setSearchResults(filteredCountries);
  }, [search, countries]);

  useEffect(() => {
    const filteredCountries =
      selectregion.id !== 1
        ? countries?.filter(
            (country) => country?.node.region === selectregion.name
          )
        : countries;
    setSearchResults(filteredCountries);
  }, [selectregion.id, selectregion.name, countries]);

  return (
    <div className="container-custom">
      <div className="my-11 flex flex-col items-center space-y-8 mobileL:justify-between tablet:flex-row tablet:space-y-0">
        <Search search={search} setSearch={setSearch} />
        <Filter
          regions={REGIONS}
          selectregion={selectregion}
          setSelectRegion={setSelectRegion}
        />
      </div>
      <div>
        {error && <div>{error.message}</div>}
        {loading && <Loading />}
        {!loading && <CountryList countries={searchResults!} />}
      </div>
    </div>
  );
};

export default Home;
