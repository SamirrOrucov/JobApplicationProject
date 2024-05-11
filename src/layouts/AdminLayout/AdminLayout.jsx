import React from 'react'
import "./AdminLayout.scss"
import AdminNav from '../AdminNav/AdminNav'
import { Outlet } from 'react-router-dom'
import AdminNavTop from '../AdminNav/AdminNavTop/AdminNavTop'


function AdminLayout() {
  return (
    <div className='adminLayout'>
      <AdminNavTop/>
       <div className="outletContainer">
        <AdminNav/>
       <Outlet/>
       </div>
    </div>
  )
}

export default AdminLayout