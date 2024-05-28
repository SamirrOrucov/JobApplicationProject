import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sirketler.scss";
import axios from "axios";
import { BASE_URL } from "../../../constants/base";

function Sirketler() {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    getVacancies();
  }, []);

  function getVacancies() {
    axios
      .get(`${BASE_URL}admins/companies`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sInN1YiI6Im5paGF0QGRpdi5lZHUuYXoiLCJqdGkiOiIxIiwiaWF0IjoxNzE2NDExNzY4LCJleHAiOjE3MTY4NDM3Njh9.U998x6Cxd0sarZVSRiEi4mze9ViitP1bbkJXdyFcnpQ",
        },
      })
      .then((response) => {
        // Handle success
        setCompany(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  return (
    <div>
      <section id="sirketler">
        <div className="container">
          <div className="name">
            <h1>Şirkətlər</h1>
            <Link>
              View All <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="cards">
            {company.map((x) => (
              <div>
                <div className="card">
                  <div className="card_datas">
                    <img
                      src={x.logo}
                      alt=""
                    />
                    <div className="infos">
                      <div className="name">
                        <h6>{x.name}</h6>
                      </div>
                      <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Baku</p>
                      </div>
                    </div>
                  </div>
                  <button>Open Position (3) </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sirketler;
