import React from 'react'
import { Breadcrumb } from 'antd';
import "./Companies.scss";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
const Companies = () => {
    return (
        <>
            <section id='companies'>
                <div className="companies_title_box">
                    <div className="companies_title_box_links">
                        <Link to={"/"} className="companies_title_box_link">Əsas səhifə  /</Link>
                        <Link className="companies_title_box_lin"> Şirkətlər</Link>
                    </div>
                    <h1 className="companies_title_box_title">Şirkətlər</h1>
                    <div className="company_search">
                        <IoSearchSharp className="company_search_icon" />
                        <input className="company_search_input" type="text" placeholder="Şirkət axtar" />
                    </div>
                </div>
                <h1 className="companies_title">Bütün şirkətlər</h1>
                <div className="companies_cards">
                    <CompanyCard/>
                    <CompanyCard/>
                    <CompanyCard/>
                    <CompanyCard/>
                </div>
            </section>
        </>
    )
}

export default Companies