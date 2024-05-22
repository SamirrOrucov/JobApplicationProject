import React, { useEffect, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Col, Row, Space, Table, Input, Select } from "antd";
import axios from "axios";
import { BASE_URL } from "../../../constants/base";

function index() {
  const [languages, setLanguages] = useState([]);
  const [jobStatus, setJobStatus] = useState([]);
  const user = [
    {
      id: "2142332512",
      name: "Samir",
      surname: "Orucov",
      email: "samir@gmail.com",
      birthday: "28.04.2004",
      gender: "0",
      studyLevel: "Bachelour",
      major: "Information Technology",
      createdAt: "09.05.2024",
    },
    {
      id: "2142332513",
      name: "Samir",
      surname: "Orucov",
      gender: "0",

      email: "samir@gmail.com",
      birthday: "28.04.2004",
      studyLevel: "Bachelour",
      major: "Information Technology",
      createdAt: "08.05.2024",
    },
    {
      id: "2142332541",
      name: "Samir",
      surname: "Orucov",
      gender: "0",

      email: "samir@gmail.com",
      birthday: "28.04.2004",
      studyLevel: "Bachelour",
      major: "Information Technology",
      createdAt: "04.05.2024",
    },
  ];
  const columns = [
    {
      title: "Tarix",
      dataIndex: "createdAt",
      key: "createdAt",

      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      render: (text, record) =>
        record.createdAt.slice(11, 16) +
        " " +
        " " +
        record.createdAt.slice(0, 10),
    },
    {
      title: "Ad",
      width: 200,
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link to={"/admin/users/" + record.id}>{text}</Link>
      ),
    },
    {
      title: "Soyad ",
      dataIndex: "surname",
      key: "surname",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 200,
    },
    {
      title: "Doğum tarixi",
      dataIndex: "birthday",
      key: "birthday",
      width: 200,
    },
    {
      title: "Təhsil",
      dataIndex: "studyLevel",
      key: "studyLevel",
      width: 200,
    },
    {
      title: "İxtisas",
      dataIndex: "major",
      key: "major",
      width: 200,
    },

    {
      title: "Action",
      key: "action",
      width: 200,

      render: (_, record) => (
        <Space size="middle">
          <Link to={"/admin/users/detail"}>Ətraflı</Link>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const getLanguagesId = () => {
    axios.get(`${BASE_URL}user-informations/languages`).then((res) => {
      setLanguages(res.data);
    });
  };
  const getJobStatusId = () => {
    axios.get(`${BASE_URL}user-informations/employment-status`).then((res) => {
      setJobStatus(res.data);
    });
  };
  useEffect(() => {
    getLanguagesId();
    getJobStatusId();
  }, []);

  const nameSearch = (e) => {
    console.log(e.target.value);
  };
  const surnameSearch = (e) => {
    console.log(e.target.value);
  };
  const facultySearch = (e) => {
    console.log(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const languageOptions = [];
  languages.map((item) => {
    languageOptions.push({
      value: item.id,
      label: item.language,
    });
  });
  const jobStatusOptions = [];
  jobStatus.map((item) => {
    jobStatusOptions.push({
      value: item.id,
      label: item.name,
    });
  });

  return (
    <div className="articleRequests">
      <div className="articleRequests_container">
        <Row>
          <Col span={24}>
            <Row gutter={[20]} className="containerFilter">
              <Col>
                <Input placeholder="Ad" onChange={nameSearch} />
              </Col>
              <Col>
                <Input placeholder="Soyad" onChange={surnameSearch} />
              </Col>
              <Col>
                <Input placeholder="İxtisas" onChange={facultySearch} />
              </Col>
              <Col>
                <Select
                  placeholder={"Dil"}
                  style={{
                    width: 150,
                  }}
                  onChange={handleChange}
                  options={languageOptions}
                />
              </Col>
              <Col>
                <Select
                  placeholder={"İş statusu"}
                  style={{
                    width: 150,
                  }}
                  onChange={handleChange}
                  options={jobStatusOptions}
                />
              </Col>
            </Row>
            <Row>
              <Table
                className="table"
                bordered={true}
                columns={columns}
                key={user.id}
                dataSource={user}
                rowKey="_id"
              />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default index;
