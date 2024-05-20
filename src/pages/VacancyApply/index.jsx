import React from "react";
import "./vacancyApply.scss";

function VacancyApply() {
  return (
    <div>
      <div id="vacancyApply">
        <div className="container">
          <div className="vacancyApply_title_box">
            <img src="/kapital_bank_logo.svg" alt="" />
            <div className="vacancyApply_box_content">
              <h3 className="vacancyApply_box_content_title">
                BackEnd developer
              </h3>
              <p className="vacancyApply_box_content_text">Kapital Bank</p>
            </div>
          </div>

          <div className="vacancyApply_info_box">
            <form action="">
              <textarea
                name=""
                id=""
                cols="80"
                rows="8"
                placeholder="İşə qəbul olmaq üçün mətn"
              ></textarea>
            </form>
            <div className="cv_upload">
              <i className="fa-solid fa-upload"></i>
              <h5>Click or drag file to this area to upload</h5>
              <p>Support for a single or bulk upload</p>
            </div>
            <button>Tesdiqle</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyApply;
