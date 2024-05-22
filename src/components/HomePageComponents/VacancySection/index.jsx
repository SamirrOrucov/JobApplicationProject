import React, { useEffect, useState } from "react";
import "./vacancySection.scss";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../constants/base";
import axios from "axios";

function VacancySection() {
  const [company, setCompany] = useState([]);

  function getVacancies() {
    axios
      .get(`${BASE_URL}admins/vacancy`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sInN1YiI6Im5paGF0QGRpdi5lZHUuYXoiLCJqdGkiOiIxIiwiaWF0IjoxNzE2NDExNzY4LCJleHAiOjE3MTY4NDM3Njh9.U998x6Cxd0sarZVSRiEi4mze9ViitP1bbkJXdyFcnpQ",
        },
      })
      .then((response) => {
        // Handle success
        setCompany(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  useEffect(() => {
    getVacancies();
  }, []);

  return (
    <div>
      <section id="vacancy">
        <div className="container">
          <div className="name">
            <h1>Vakansiyalar</h1>
            <Link to="/vacancies">
              View All <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
          <div className="cards">
            {company.slice(0,6).map((x) => (
              <Link>
                <div className="card">
                  <div className="card_datas">
                    <h3>{x.vacancyDetail.position}</h3>
                    <p>{x.company.name}</p>
                    <h4>{x.vacancyDetail.salary} Azn</h4>
                    <h5>{x.category.name}</h5>
                  </div>
                  <button>Daha Ətraflı</button>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}

export default VacancySection;
