import React from 'react'
import "./VacancyDetail.scss";

const VacancyDetail = () => {
    return (
        <>
            <section id='vacancyDetail'>
                <div className='vacancyDetail_container'>
                    <div className="vacancyDetail_title_box">
                        <img src="/kapital_bank_logo.svg" alt="" />
                        <div className="vacancyDetail_box_content" >
                            <h3 className="vacancyDetail_box_content_title">BackEnd developer</h3>
                            <p className="vacancyDetail_box_content_text">Kapital Bank</p>
                        </div>
                    </div>
                    <div className='vacancyDetail_box'>
                        <h3>İş barədə məlumat</h3>
                        <p>“Kapital Bank” ASC namizədləri “Backend Developer ” vakansiyasına müraciət etməklə “Agile” komandasına dəvət edir.</p>
                        <div>
                            <h2>Öhdəliklər</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos omnis aut non nemo vel perspiciatis nihil temporibus, eius eveniet molestias quo. Ea eaque beatae laudantium culpa provident unde, dolorem nobis accusantium, eius vitae ut iure sunt illum deleniti porro ullam quae nostrum? Dicta sit odio incidunt asperiores consectetur, repellat ab.</p>
                        </div>
                        <div>
                            <h2>Tələblər</h2>
                            <ul>
                                <li>Jira</li>
                                <li>Jira</li>
                                <li>Jira</li>
                                <li>Jira</li>
                                <li>Jira</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Namizəd Təmin olunacaq</h2>
                            <ul>
                                <li>Jira</li>
                                <li>Jira</li>
                                <li>Jira</li>
                                <li>Jira</li>
                                <li>Jira</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VacancyDetail