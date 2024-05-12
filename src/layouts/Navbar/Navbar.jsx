import React from "react";
import "./Navbar.scss";
import { Link, NavLink } from "react-router-dom";


function Navbar() {



  return (
    <div className="navbar">
      <div className="navbar_container">
        <nav>
          <Link to="/"><img src="https://amas.aztu.edu.az/assets/main/img/aztu_s.png" alt="" /></Link>
          <div className="menu">
            <h3>İş Elanları</h3>
            <h3>Şirkətlər</h3>
            <h3>Müştəri Xidmətləri</h3>
          </div>
          <div className="login">
            <h4>Aliyev Ali</h4>
            <img src="https://static-00.iconduck.com/assets.00/profile-circle-icon-2048x2048-cqe5466q.png" alt="" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
