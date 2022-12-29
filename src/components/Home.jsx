import NavBar from "./Navbar";
import Listings from "./Listings";
import React, { useState, useEffect } from "react";
import Pagination from "./Pagination" 

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const url = "https://restcountries.com/v3.1/all";
  const urlWithSearchParams = "https://restcountries.com/v3.1/name/";
  const [recordsPerPage] = useState(5);

  const showSearchResult = (searchString) => {
    setSearchString(searchString.toLowerCase())
    };

  const setCurrent = (curr) => setCurrentPage(curr);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = countries.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(countries.length / recordsPerPage);

  useEffect(() => {
    const endpoint = searchString ? urlWithSearchParams + searchString : url
    fetch(endpoint)
    .then(res => {
    if (!res.ok) {
    return Error("Oh no");
    }
    return res.json();
    })
    .then(data => setCountries(data));
    }, [searchString]);
  return (
    <>
    {console.log(countries)}
      <NavBar showSearchResult={showSearchResult}/>
      <Listings countries={currentRecords} />
      <Pagination
        datacount={countries.length}
        setcurrent={setCurrent}
        currentpage={currentPage}
        numofpages={nPages}
      />
    </>
  );
}

export default Home;
