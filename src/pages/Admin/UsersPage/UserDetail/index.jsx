import React from "react";
import "./style.scss";
function index() {
  const user = {
    id: "2142332512",
    name: "Samir",
    surname: "Orucov",
    email: "samir@gmail.com",
    fatherName: "Ramazan",
    addres: "Balaken",
    liveAddres: "Bakı Əsəd Əhmədov",
    gender: "Kişi",
    fin: "8VHG2NJ",
    militaryQualification: "Yoxdur",
    martialStatus: "subay",
    educationDetail: {
      educationLevel: "Bachelour",
      university: "Azmiu",
      qualification: "Information Technologies",
      startAndEndDate: "09.2021 07.2025",
      degree: "3",
    },
    employmentStatusDetail: [
      {
        employmentStatus: "İşləyirəm ",
        workPlace: "Erp-Intel",
        position: "Frontend Developer",
        startDate: "2024.04.15",
      },
    ],
    language: [
      {
        name: "English",
        languageLevel: {
            name:"B2"
        },
      },
      {
        name: "German",
        languageLevel: {
            name:"A2"
        },
      },
      {
        name: "Russian",
        languageLevel: {
            name:"A1"
        },
      },
    ],
    birthday: "28.04.2004",
    studyLevel: "Bachelour",
    number: "0775177770",
    major: "Information Technology",
    company: "ERP-Intel",
    job: "Frontend Developer",
    createdAt: "09.05.2024",
  };
  return (
    <div className="userDetail">
      <div className="userDetail_container">
        <div className="userDetail_table">
          <div className="userDetail_table_row">
            <p>
              <span>Ad Soyad:</span>
              {user.name + " " + user.surname}
            </p>
            <p>
              <span>Email:</span>
              {user.email}
            </p>
          </div>
          <div className="userDetail_table_row">
            <p>
              <span>Mobil nömrə:</span>
              {user.number}
            </p>
            <p>
              <span>Doğum Tarixi</span>
              {user.birthday}
            </p>
          </div>
          <div className="userDetail_table_row">
            <p>
              <span>İş yeri:</span>
              {user.company ? user.company : "Məlumat yoxdur"}
            </p>
            <p>
              <span>Vəzifə:</span>
              {user.job ? user.job : "Məlumat yoxdur"}
            </p>
          </div>
        </div>
        <div className="userDetail_article">
          <div className="userDetail_article_title">
            <p>Cv atdığı iş elanları</p>
          </div>
          <div className="userDetail_article_main">
            {0 === 0 ? (
              <p className="empty">*Göndərilən cv yoxdur</p>
            ) : (
              <table className="table">
                <thead>
                  <tr className="tableHead">
                    <th>Məqalə sorğusu başlığı</th>
                    <th>Müqavilə faylı</th>
                    <th>Müraciət tarixi</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {requests.map((item) => (
                    <tr key={item._id} className="tableBody">
                      <td>{item.title}</td>

                      <td className="article">
                        <Link to={item.file}>Məqalə Faylı</Link>
                      </td>
                      <td>
                        <p>
                          {item.createdAt.slice(0, 10)}
                          {" / "}
                          {item.createdAt.slice(11, 16)}
                        </p>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            )}

            {/* <p className="nese">*Göndərilən məqalə yoxdur</p> */}
            <div>
              {/* {requests.file} */}
              {/* {console.log(requests.file)} */}
              {/* {console.log(requests)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
