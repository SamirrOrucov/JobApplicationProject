import React from 'react'
import "./CompanyDetailCard.scss";
import { Link } from 'react-router-dom';
const CompanyDetailCard = () => {
  return (
    <>
      <div className="company_detail_card">
        <img src="/kapital_bank_logo.svg" alt="" />
        <div className="company_detail_card_content" >
          <Link to={"/vacancy/detail"} className="company_detail_card_content_title">BackEnd developer</Link>
          <p className="company_detail_card_content_text">Kapital Bank</p>
        </div>
      </div>
    </>
  )
}

export default CompanyDetailCard