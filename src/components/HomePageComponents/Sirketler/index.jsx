import React from "react";
import { Link } from "react-router-dom";
import "./sirketler.scss";

function Sirketler() {
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
            <div className="card">
              <div className="card_datas">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HX_9gDpvtu6_9H7aV6OmGXYPg_8vy7Wd1A&usqp=CAU"
                  alt=""
                />
                <div className="infos">
                  <div className="name">
                    <h6>Dribble</h6>
                    <p>Featured</p>
                  </div>
                  <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Baku</p>
                  </div>
                </div>
              </div>
              <button>Open Position (3) </button>
            </div>
            <div className="card">
              <div className="card_datas">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HX_9gDpvtu6_9H7aV6OmGXYPg_8vy7Wd1A&usqp=CAU"
                  alt=""
                />
                <div className="infos">
                  <div className="name">
                    <h6>Dribble</h6>
                    <p>Featured</p>
                  </div>
                  <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p>Baku</p>
                  </div>
                </div>
              </div>
              <button>Open Position (3) </button>
            </div>
            <div className="card">
              <div className="card_datas">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6HX_9gDpvtu6_9H7aV6OmGXYPg_8vy7Wd1A&usqp=CAU"
                  alt=""
                />
                <div className="infos">
                  <div className="name">
                    <h6>Dribble</h6>
                    <p>Featured</p>
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
        </div>
      </section>
    </div>
  );
}

export default Sirketler;
