import React from "react";
import "./AdminNav.scss";
import { Link, NavLink } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

function AdminNav() {
  return (
    <div className="adminNav">
      <div className="adminNavContainer">
       
        <div className="adminNav_sidebar">
          <div className="adminNav_link">
            <NavLink to="/admin/vacancy">
              <IoNewspaperOutline />
              Vakansiyalar
            </NavLink>
            <NavLink to="/admin/companies">
              <i className="fa-solid fa-chart-line"></i>
              Şirkətlər
            </NavLink>
            
            <NavLink to="/admin/users">
              <FaUser />
              İstifadəçilər
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
