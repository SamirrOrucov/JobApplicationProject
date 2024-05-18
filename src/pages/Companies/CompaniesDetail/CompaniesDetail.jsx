import React from 'react'
import "./CompaniesDetail.scss";
import { Link } from 'react-router-dom';
import { IoSearchSharp } from 'react-icons/io5';
import CompanyDetailCard from '../../../components/CompanyPageComponents/CompanyDetailCard/CompanyDetailCard';
const CompaniesDetail = () => {
    return (
        <>
            <section id='companiesDetail'>
                <div className="companiesDetail_title_box">
                    <div className='companiesDetail_title_box_content'>
                        <div className='companiesDetail_title_box_content_logo'>
                            <img src="../../../../public/kapital_bank_logo.svg" alt="" />
                        </div>
                        <h1 >Kapital Bank</h1>
                    </div>
                    <div className="company_search">
                        <IoSearchSharp className="company_search_icon" />
                        <input className="company_search_input" type="text" placeholder="Vakansiya axtar" />
                    </div>
                </div>
                <div className='companiesDetail_title' >
                    <h3>Vakansiyalar</h3>
                </div>
                <div className="companiesDetail_cards">
                    <div className="companiesDetail_cards_item">
                        <CompanyDetailCard />
                        <CompanyDetailCard />
                    </div>
                    <div className="companiesDetail_cards_item">
                        <CompanyDetailCard />
                        <CompanyDetailCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default CompaniesDetail