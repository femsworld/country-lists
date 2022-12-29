import Navbar from "./Navbar";
import Listings from "./Listings";
import { useEffect, useState } from "react";
import Pagination from "./Pagination" 

function Home() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const url = "https://restcountries.com/v3.1/all";
  const [recordsPerPage] = useState(5);

  const setCurrent = (curr) => setCurrentPage(curr);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = countries.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(countries.length / recordsPerPage);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => setCountries(data));
  }, [] );
  return (
    <>
      <Navbar />
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
