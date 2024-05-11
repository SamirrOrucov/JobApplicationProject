import React from "react";
import "./Navbar.scss";


function Navbar() {



  return (
    <div className="navbar">
      <div className="navbar_container">
        <nav>
          <img src="https://amas.aztu.edu.az/assets/main/img/aztu_s.png" alt="" />
          <div className="menu">
            <h3>İş Elanları</h3>
            <h3>Şirkətlər</h3>
            <h3>Kategoriyalar</h3>
            <h3>Müştəri Xidmətləri</h3>
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
