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
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sInN1YiI6Im5paGF0QGRpdi5lZHUuYXoiLCJqdGkiOiIxIiwiaWF0IjoxNzE2MDU1Njk1LCJleHAiOjE3MTYwNjQ2OTV9.wGuCvimwmhOpE53tG91BgcA69kbFmAZ-60vFKp-CLLY",
        },
      })
      .then((response) => {
        // Handle success
        console.log(response.data);
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
            <div className="card">
              <div className="card_datas">
                <h3>Job's Name</h3>
                <p>Company Name</p>
                <h4>Salary Azn</h4>
                <h5>Job's Category</h5>
              </div>
              <button>Daha Ətraflı</button>
            </div>
            <div className="card">
              <div className="card_datas">
                <h3>Front-End Developer</h3>
                <p>Pasha Bank</p>
                <h4>1500-2000 Azn</h4>
                <h5>Information Technologies</h5>
              </div>
              <button>Daha Ətraflı</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VacancySection;
