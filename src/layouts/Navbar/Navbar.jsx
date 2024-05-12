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
            <NavLink>İş Elanları</NavLink>
            <NavLink to={"/companies"}>Şirkətlər</NavLink>
            <NavLink>Kategoriyalar</NavLink>
            <NavLink>Müştəri Xidmətləri</NavLink>
          </div>
          <div className="login">
            <h4>Sign In</h4>
            <h4 className="loginbtn">Log In</h4>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
