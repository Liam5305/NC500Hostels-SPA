import React from "react";
import { useState, useEffect } from 'react';
import { Hostel } from "./Hostel.js";


function FilterData() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hostels, setHostels] = useState([]);

  const [query, setQuery] = useState("");
  const [searchParam] = useState(["address", "name"]);
  useEffect(() => {
    fetch("http://localhost:3000/hostels")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setHostels(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  function Search() {
    return hostels.filter((hostel) => {
      return searchParam.some((newHostel) => {
        return (
          hostel[newHostel]
            .toString()
            .toLowerCase()
            .indexOf(query.toLowerCase()) > -1
        );
      });
    });
  }
  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <span className="sr-only"></span>
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search by address"
              value={query}
              onChange={(e) => setQuery(e.target.value)} />
          </label>
        </div>
        <ul>
          {Search(hostels).map(hostel => (
            <Hostel hostel={hostel} key={hostel.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default FilterData;