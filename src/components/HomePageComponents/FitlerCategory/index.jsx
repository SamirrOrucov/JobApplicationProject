import React, { useEffect, useState } from "react";
import "./filters.scss";
import { Link } from "react-router-dom";
import { Select } from "antd";
import axios from "axios";
import { BASE_URL } from "../../../constants/base";

function FiltersComponents() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    getVacancies();
  }, []);

  function getVacancies() {
    axios
      .get(`${BASE_URL}admins/categories`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sInN1YiI6Im5paGF0QGRpdi5lZHUuYXoiLCJqdGkiOiIxIiwiaWF0IjoxNzE2NDExNzY4LCJleHAiOjE3MTY4NDM3Njh9.U998x6Cxd0sarZVSRiEi4mze9ViitP1bbkJXdyFcnpQ",
        },
      })
      .then((response) => {
        // Handle success
        setCategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  return (
    <div>
      {/* Categoris section */}

      <section id="categories">
        <div className="container">
          <div className="name">
            <h1>Kateqoriyalar</h1>
          </div>
          <div className="cards">
            {category.map((x) => (
              <div>
                <div className="card">
                <i className="fa-solid fa-list"></i>
                  <div className="card_about">
                    <h4>{x.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FiltersComponents;
