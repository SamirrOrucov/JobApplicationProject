import React from "react";
import "./filters.scss"
import { Link } from "react-router-dom";
import { Select } from "antd";

function FiltersComponents() {


  return (
    <div>


      {/* Categoris section */}

      <section id="categories">
        <div className="container">
          <div className="name">
            <h1>Kateqoriyalar</h1>
          </div>
          <div className="cards">
            <div className="card">
              <i className="fa-solid fa-code"></i>
              <div className="card_about">
                <h4>Code & Programing</h4>
                <p>312 Open position</p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-code"></i>
              <div className="card_about">
                <h4>Code & Programing</h4>
                <p>312 Open position</p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-code"></i>
              <div className="card_about">
                <h4>Code & Programing</h4>
                <p>312 Open position</p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-code"></i>
              <div className="card_about">
                <h4>Code & Programing</h4>
                <p>312 Open position</p>
              </div>
            </div>
            <div className="card">
              <i className="fa-solid fa-code"></i>
              <div className="card_about">
                <h4>Code & Programing</h4>
                <p>312 Open position</p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

    </div>
  );
}

export default FiltersComponents;
