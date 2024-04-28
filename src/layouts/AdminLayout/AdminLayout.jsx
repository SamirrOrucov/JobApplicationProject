import React from 'react'
import "./AdminLayout.scss"
import AdminNav from '../AdminNav/AdminNav'
import { Outlet } from 'react-router-dom'


function AdminLayout() {
  return (
    <div className='adminLayout'>
        <AdminNav/>
        <Outlet/>
    </div>
  )
}

export default AdminLayout