import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

export default function Listings() {
  const [countries, SetCountries] = useState([]);

  const url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          return Error("Oh no");
        }
        return res.json();
      })
      .then((data) => SetCountries(data));
  });

  return (
    <>
      <table class="table">
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
                <button type="button" class="btn btn-light">
                  <i class="fa fa-angle-right"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
