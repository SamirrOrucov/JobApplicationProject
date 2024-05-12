import React, { useEffect, useState } from "react";
import "./VacancyDetail.scss";
import { useParams } from "react-router";

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
            <button>Apply</button>
          </div>

        </div>
      </section>
    </>
  );
};

export default VacancyDetail;
