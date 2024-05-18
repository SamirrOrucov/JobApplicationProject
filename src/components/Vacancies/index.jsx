import React, { useEffect, useState } from "react";
import "./vacancy.scss";
import { Link } from "react-router-dom";

function Vacancies() {
  const [product, setProduct] = useState([]);
  const [display, setDisplay] = useState(true);

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
          <div className="header">
            <div className="mainImage"></div>
            <img
              className="categoryImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsDzT4ChP0uonxPmqq3EQiDLs9sLqcwybgCQ&usqp=CAU"
              alt=""
            />
            <h2>Code & Programing</h2>
          </div>

          <h3>Vakansiyalar</h3>

          <div className="cards">
            {product.slice(0, 10).map((x) => (
              <Link to={`/vacancyDetail/${x.id}`}>
                <div className="card" key={x.id}>
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
              <Link to={`/vacancyDetail/${x.id}`}>
              <div className="card" key={x.id}>
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
