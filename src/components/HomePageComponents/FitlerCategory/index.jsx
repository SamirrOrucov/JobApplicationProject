import React from "react";
import "./filters.scss"
import { Link } from "react-router-dom";
import { Select } from "antd";

function FiltersComponents() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      {/* Filter and Search of Categories */}
      <section id="functions">
        <div className="container">
          <div className="search">
            <div className="searching">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input placeholder="Job,title,keyword,company" type="text" />
            </div>
            <i className="fa-solid fa-filter"></i>
          </div>
          <div className="filter">
            <Select
              defaultValue="lucy"
              className="selection"
              style={{
                width: 190,
                height: 35,
                color: "#0d1f61",

              }}
              onChange={handleChange}
              options={[
                {
                  value: "Şirkətlər",
                  label: "Şirkətlər",
                },
                {
                  value: "Paşa",
                  label: "Paşa",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                },
              ]}
            />
            <Select
              defaultValue="lucy"
              className="selection"
              style={{
                width: 190,
                height: 35,
                color: "#0d1f61",

              }}
              onChange={handleChange}
              options={[
                {
                  value: "Şirkətlər",
                  label: "Şirkətlər",
                },
                {
                  value: "Paşa",
                  label: "Paşa",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                },
              ]}
            />
            <Select
              defaultValue="lucy"
              className="selection"
              style={{
                width: 190,
                height: 35,
                color: "#0d1f61",

              }}
              onChange={handleChange}
              options={[
                {
                  value: "Şirkətlər",
                  label: "Şirkətlər",
                },
                {
                  value: "Paşa",
                  label: "Paşa",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                },
              ]}
            />
            <Select
              defaultValue="lucy"
              className="selection"
              style={{
                width: 190,
                height: 35,
                color: "#0d1f61",

              }}
              onChange={handleChange}
              options={[
                {
                  value: "Şirkətlər",
                  label: "Şirkətlər",
                },
                {
                  value: "Paşa",
                  label: "Paşa",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                },
              ]}
            />
            <Select
              defaultValue="lucy"
              className="selection"
              style={{
                width: 190,
                height: 35,
                color: "#0d1f61",

              }}
              onChange={handleChange}
              options={[
                {
                  value: "Şirkətlər",
                  label: "Şirkətlər",
                },
                {
                  value: "Paşa",
                  label: "Paşa",
                },
                {
                  value: "Yiminghe",
                  label: "yiminghe",
                },
                {
                  value: "disabled",
                  label: "Disabled",
                },
              ]}
            />
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
