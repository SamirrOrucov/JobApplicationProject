import React from 'react'
import "./CompanyCard.scss";
const CompanyCard = () => {
  return (
    <>
    <div className="company_card">
        <img src="/kapital_bank_logo.svg" alt="" />
        <div className="company_card_content" >
            <h3 className="company_card_content_title">Kapital Bank</h3>
            <p className="company_card_content_text">40 vakansiya</p>
        </div>
    </div>
    </>
  )
}

export default CompanyCard