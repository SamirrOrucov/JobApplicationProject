import React, { useEffect, useState } from "react";
import "./vacancy.scss";
import { Link } from "react-router-dom";
import { Select } from "antd";
import axios from "axios";
import { BASE_URL } from "../../constants/base";

function Vacancies() {
  const [product, setProduct] = useState([]);
  const [display, setDisplay] = useState(true);
  const [jobStatus, setJobStatus] = useState([])

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    getVacancies();
    // getVacancyPosition();
  }, []);

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
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }

  // function getVacancyPosition() {
  //   axios
  //     .get(`${BASE_URL}admins/vacancy/position`, {
  //       headers: {
  //         Authorization:
  //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sInN1YiI6Im5paGF0QGRpdi5lZHUuYXoiLCJqdGkiOiIxIiwiaWF0IjoxNzE2NDExNzY4LCJleHAiOjE3MTY4NDM3Njh9.U998x6Cxd0sarZVSRiEi4mze9ViitP1bbkJXdyFcnpQ",
  //       },
  //     })
  //     .then((response) => {
  //       // Handle success
  //       setProduct(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       // Handle error
  //       console.error(error);
  //     });
  // }

  const handleVacancy = () => {
    setDisplay(!display);
  };

  // const jobStatusOptions = [];
  // jobStatus.map((item) => {
  //   jobStatusOptions.push({ value: item.id, label: item.name });
  // });

  return (
    <div>
      <div id="vacancies">
        <div className="container">
          <div className="header">
            <div className="mainImage"></div>
            <img
              className="categoryImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDzT4ChP0uonxPmqq3EQiDLs9sLqcwybgCQ&usqp=CAU"
              alt=""
            />
            <h2>Code & Programing</h2>
          </div>

          {/* Filter and Search of Categories */}
          <section id="functions">
            <div className="container">
              <div className="search">
                <div className="searching">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input placeholder="Job,title,company" type="text"  />
                </div>
                <i className="fa-solid fa-filter"></i>
              </div>
              {/* <div className="filter">
                <Select
                  defaultValue="lucy"
                  className="selection"
                  style={{
                    width: 190,
                    height: 35,
                    color: "#0d1f61",
                  }}
                  onChange={handleChange}
                  // options={jobStatusOptions()}
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
                      value: "pasa",
                      label: "Şirkətlər",
                    },
                  ]}
                />
              </div> */}
            </div>
          </section>

          <h3>Vakansiyalar</h3>

          <div className="cards">
            {product.slice(0, 10).map((x) => (
              <Link to={`/vacancyDetail/${x.id}`} key={x.id}>
                <div className="card">
                  <img src={x.company.logo} alt="" />
                  <div className="description">
                    <h2>{x.company.name}</h2>
                    <p>{x.vacancyDetail.position}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={handleVacancy}
            className={display ? "moreButton" : "moreVacancy"}
          >
            see more
          </button>

          <div className={display ? "moreVacancy" : "seeMore"}>
            {product.slice(5, product.length).map((x) => (
              <Link to={`/vacancyDetail/${x.id}`} key={x.id}>
                <div className="card">
                  <img src={x.image} alt="" />
                  <div className="description">
                    <h2>{x.title}</h2>
                    <p>Sirket adi</p>
                    <p>Tarix</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancies;
