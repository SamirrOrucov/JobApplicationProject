import React, { useEffect, useState } from "react";
import "./VacancyDetail.scss";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const VacancyDetail = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setVacancy(data));
  }, []);

  return (
    <>
      <section id="vacancyDetail">
        <div className="vacancyDetail_container">
          <div className="vacancyDetail_title_box">
            <img src="/kapital_bank_logo.svg" alt="" />
            <div className="vacancyDetail_box_content">
              <h3 className="vacancyDetail_box_content_title">
                BackEnd developer
              </h3>
              <p className="vacancyDetail_box_content_text">Kapital Bank</p>
            </div>
          </div>

          <div className="vacancyDetail">
            <h2>İŞ MƏLUMATLARI</h2>
            <div className="cards">
              <div className="card">
                <i className="fa-solid fa-location-dot"></i>
                <div className="info">
                  <h6>Baki</h6>
                  <p>Şəhər</p>
                </div>
              </div>
              <div className="card">
              <i className="fa-regular fa-file-lines"></i>
                <div className="info">
                  <h6>İngilis dili müəllimi</h6>
                  <p>Vəzifə</p>
                </div>
              </div>
              <div className="card">
              <i className="fa-solid fa-briefcase"></i>
                <div className="info">
                  <h6>1 ildən 3 ilə qədər</h6>
                  <p>İş stajı</p>
                </div>
              </div>
              <div className="card">
              <i className="fa-solid fa-money-bill"></i>
                <div className="info">
                  <h6>400 - 600 AZN</h6>
                  <p>Əmək haqqı AZN</p>
                </div>
              </div>
              <div className="card">
              <i className="fa-solid fa-user-tie"></i>
                <div className="info">
                  <h6>20-25</h6>
                  <p>Age</p>
                </div>
              </div>
              <div className="card">
              <i className="fa-solid fa-user-graduate"></i>
                <div className="info">
                  <h6>Ali Mektebi bitirmis</h6>
                  <p>Education</p>
                </div>
              </div>
              <div className="card">
              <i className="fa-solid fa-user-graduate"></i>
                <div className="info">
                  <h6>1-2 illik tecrube</h6>
                  <p>jobExperience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="vacancyDetail_box">
            <h3>İş barədə məlumat</h3>
            <p className="info">
              “Kapital Bank” ASC namizədləri “Backend Developer ” vakansiyasına
              müraciət etməklə “Agile” komandasına dəvət edir.
            </p>
            <div className="ohdelikler">
              <h2>Öhdəliklər</h2>
              <ul>
                <li>
                  Yeni RESTful servislərin yazılması, təkmilləşdirilməsi və
                  aktual olanların dəstəklənməsi;
                </li>
                <li>Rest API-ların Swagger ilə dokumentasiyası;</li>
                <li>
                  Streaming Analytics platformaya dəstək, yeni layihələrin
                  başlanması və dəstəklənməsi, aktual layihələrin
                  təkmilləşdirilməsi;
                </li>
                <li>
                  Müştəri davranışının real zaman anında məlumat axını şəklində
                  qurulması, dəstəklənməsi və təkmilləşdirilməsi.
                </li>
              </ul>
            </div>
            <div className="telebler">
              <h2>Tələblər</h2>
              <ul>
                <li>Java 8/ Spring boot framework təcrübəsi;</li>
                <li>SQL (Oracle arzuolunandır);</li>
                <li>CI/CD bilikləri üstünlükdür;</li>
                <li>Böyük həcmli məlumat bazaları ilə işləmək təcrübəsi arzuolunandır.</li>
                <li>Linux (CentOS) bilikləri arzuolunandır;</li>
              </ul>
            </div>
            <div className="temin">
              <h2>Namizəd Təmin olunacaq</h2>
              <ul>
                <li>Pul</li>
                <li>Temalar</li>
                <li>Ofis</li>
                <li>Karyera</li>
                <li>LifeStyle</li>
              </ul>
            </div>
            <Link to="/vacancyApply">
            <button>Apply</button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default VacancyDetail;
