import React, { useEffect, useState } from "react";
import "./vacancy.scss";
import { Link } from "react-router-dom";
import { Select } from "antd";

function Vacancies() {
  const [product, setProduct] = useState([]);
  const [display, setDisplay] = useState(true);
  const [filter, setFilter] = useState("")




  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const res = await data.json();
    setProduct(res);
  };

  const handleVacancy = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <div id="vacancies">
        <div className="container">
        <section id="functions">
            <div className="container">
              <div className="search">
                <div className="searching">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input placeholder="Job,title,keyword,company" type="text" onChange={(e) => setFilter(e.target.value)} />
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
                      value: "pasa",
                      label: "Şirkətlər",
                    }
                  ]}
                />
              </div>
            </div>
          </section>


          {/* <div className="header">
            <div className="mainImage"></div>
            <img
              className="categoryImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDzT4ChP0uonxPmqq3EQiDLs9sLqcwybgCQ&usqp=CAU"
              alt=""
            />
            <h2>Code & Programing</h2>
          </div> */}

          {/* Filter and Search of Categories */}
       

          {/* <h3>Vakansiyalar</h3> */}

          <div className="cards">
          {/* onChange={(e) => setFilter(e.target.value)} */}
            {product.slice(0, 10)
            .filter((x)=>x.title.includes(filter.toLowerCase()))
            .map((x) => (
              <Link to={`/vacancyDetail/${x.id}`} key={x.id}>
                <div className="card" >
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

          <button
            onClick={handleVacancy}
            className={display ? "moreButton" : "moreVacancy"}
          >
            see more
          </button>

          <div className={display ? "moreVacancy" : "seeMore"}>
            {product.slice(5, product.length).map((x) => (
              <Link to={`/vacancyDetail/${x.id}`} key={x.id}>
                <div className="card" >
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
