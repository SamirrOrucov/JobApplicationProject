import React from "react";
import "./AdminNav.scss";
import { Link, NavLink } from "react-router-dom";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { FaUser } from "react-icons/fa";


function AdminNav() {
  return (
    <div className="adminNav">
      <div className="adminNav_sidebar">
        <div className="adminNav_title">
          <Link to={"/admin"}>
            <p>Admin Panel</p>
          </Link>
        </div>
        <div className="adminNav_link">
          <NavLink to="/admin/news">
            <IoNewspaperOutline />
            Xəbərlər
          </NavLink>
          <NavLink to="/admin/statistics">
            <i className="fa-solid fa-chart-line"></i>
            Statistika
          </NavLink>
          <NavLink to="/admin/team">
            <FaUserFriends />
            Heyət
          </NavLink>
          <NavLink to="/admin/users">
            <FaUser />
            İstifadəçilər
          </NavLink>    
           <NavLink to="/admin/users">
            <FaUser />
            İstifadəçilər
          </NavLink> 
        </div>
      </div>
    </div>
  );
}

export default AdminNav;
