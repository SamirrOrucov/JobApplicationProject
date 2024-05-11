import React from 'react'
import "./CompanyDetailCard.scss";
const CompanyDetailCard = () => {
  return (
    <>
      <div className="company_detail_card">
        <img src="/kapital_bank_logo.svg" alt="" />
        <div className="company_detail_card_content" >
          <h3 className="company_detail_card_content_title">BackEnd developer</h3>
          <p className="company_detail_card_content_text">Kapital Bank</p>
        </div>
      </div>
    </>
  )
}

export default CompanyDetailCard