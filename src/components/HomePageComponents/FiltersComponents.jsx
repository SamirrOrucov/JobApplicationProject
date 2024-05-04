import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

function FiltersComponents() {
  return (
    <div>
      {/* Filter and Search of Categories */}
      <section id="functions">
        <div className="container">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Job,title,keyword,company" type="text" />
          </div>
          <div className="filter">
            <select name="" id="">
              <option value="">Şirkətlər</option>
              <option value="">Paşa</option>
            </select>
            <select name="" id="">
              <option value="">Şirkətlər</option>
              <option value="">Paşa</option>
            </select>
            <select name="" id="">
              <option value="">Şirkətlər</option>
              <option value="">Paşa</option>
            </select>
            <select name="" id="">
              <option value="">Şirkətlər</option>
              <option value="">Paşa</option>
            </select>
            <select name="" id="">
              <option value="">Şirkətlər</option>
              <option value="">Paşa</option>
            </select>
          </div>
        </div>
      </section>

      {/* Categoris section */}

      <section id="categories">
        <div className="container">
          <div className="name">
            <h1>Kateqoriyalar</h1>
            <Link>
              View All <i className="fa-solid fa-arrow-right"></i>
            </Link>
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
