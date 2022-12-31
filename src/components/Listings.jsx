import React from "react";
import { Table, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Listings({countries}) {
  

  return (
    <>
      <Table className="table">
        <thead>
          <tr>
            <th scope="col">Flag</th>
            <th scope="col">Name</th>
            <th scope="col">Region</th>
            <th scope="col">Population</th>
            <th scope="col">Languages</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, key) => (
            <tr key={key}>
              <td>{country.flag}</td>
              <td>{country.name.common}</td>
              <td>{country.region}</td>
              <td>{country.population}</td>
              <td>
                {country.languages ? (
                  <ul>
                    {Object.values(country.languages).map((item, key) => (
                      <li key={key}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </td>
              <td>
                {console.log(country.name.common)}
                <Link to={`/details/${country.name.common}`}>
                <Button variant="light" data-cy={`detailsBtn-${country.name.common}`}>
                  <i className="fa fa-angle-right"></i>
                </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>      
    </>
  );
}
export default Listings;
