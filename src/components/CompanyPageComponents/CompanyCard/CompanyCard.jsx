import React from 'react'
import "./CompanyCard.scss";
import { Link } from 'react-router-dom';
const CompanyCard = () => {
  return (
    <>
      <div className="company_card">
        <img src="/kapital_bank_logo.svg" alt="" />
        <div className="company_card_content" >
          <Link to={"/companies/detail"} className="company_card_content_title">Kapital Bank</Link>
          <p className="company_card_content_text">40 vakansiya</p>
        </div>
      </div>
    </>
  )
}

export default CompanyCard