import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Asif() {
  const [countries, setCountries] = useState<any>([]);
  useEffect(() => {
    axios(`https://restcountries.com/v2/all`).then((res) =>
      setCountries(res.data)
    );
  }, []);

  return (
    <>
      {countries.map((country: any, i: any) => {
        return (
          <div key={i} className="country">
            <Link to={`/country/${country.alpha3Code}`}>
              <h3>{country.name}</h3>
            </Link>
          </div>
        );
      })}
    </>
  );
}
