import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {

  return (
    <div className="footer">
      <div className="footer_container">
        <footer>
          <div className="footertop">
            <div className="container">
              <img src="https://amas.aztu.edu.az/assets/main/img/aztu_s.png" alt="" />
              <h3>Call now:+994 50 000 00 00</h3>
              <h4>Yasamal, Baku, Azerbaijan</h4>
            </div>
            <div className="container">
              <h1>Quick Link</h1>
              <div className="footermenu">
                <p>İş Elanları</p>
                <p>Şirkətlər</p>
                <p>Kategoriyalar</p>
                <p>Müştəri Xidmətləri</p>
              </div>
            </div>
          </div>
          <div className="footerbottom">
            <h5>@ 2024 - Job Project All rights Reserved</h5>
            <div className="icons">
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default Footer;
