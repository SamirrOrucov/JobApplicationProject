import React from 'react'
import { Breadcrumb } from 'antd';
import "./Companies.scss";
import { IoSearchSharp } from "react-icons/io5";
import { Link, NavLink } from 'react-router-dom';
import CompanyCard from '../../components/CompanyPageComponents/CompanyCard/CompanyCard';
const Companies = () => {
    return (
        <>
            <section id='companies'>
                <div className="companies_title_box">
                    <div className="companies_title_box_links">
                        <NavLink to={"/"} className="companies_title_box_link">Əsas səhifə  /</NavLink>
                        <NavLink className="companies_title_box_lin"> Şirkətlər</NavLink>
                    </div>
                    <h1 className="companies_title_box_title">Şirkətlər</h1>
                    <div className="company_search">
                        <IoSearchSharp className="company_search_icon" />
                        <input className="company_search_input" type="text" placeholder="Şirkət axtar" />
                    </div>
                </div>
                <h1 className="companies_title">Bütün şirkətlər</h1>
                <div className="companies_cards">
                    <div className="companies_cards_item">
                        <CompanyCard />
                        <CompanyCard />
                    </div>
                    <div className="companies_cards_item">
                        <CompanyCard />
                        <CompanyCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Companies