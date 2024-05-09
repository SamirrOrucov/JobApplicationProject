import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
 import { Col, Row, Space, Table } from "antd";
function index() {
  const user = [
    {
      id: "2142332512",
      name: "Samir",
      surname: "Orucov",
      email: "samir@gmail.com",
      birthday: "28.04.2004",
      studyLevel: "Bachelour",
      major: "Information Technology",
      createdAt: "09.05.2024",
    },
    {
      id: "2142332513",
      name: "Samir",
      surname: "Orucov",
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
      email: "samir@gmail.com",
      birthday: "28.04.2004",
      studyLevel: "Bachelour",
      major: "Information Technology",
      createdAt: "04.05.2024",
    },
    {
      id: "2142332551",
      name: "Samir",
      surname: "Orucov",
      email: "samir@gmail.com",
      birthday: "28.04.2004",
      studyLevel: "Bachelour",
      major: "Information Technology",
      createdAt: "01.05.2024",
    },
    {
      id: "2142633251",
      name: "Samir",
      surname: "Orucov",
      email: "samir@gmail.com",
      birthday: "28.04.2004",
      studyLevel: "Bachelour",
      major: "Information Technology",
      createdAt: "06.05.2024",
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
  return (
    <div className="articleRequests">
      <div className="articleRequests_container">
        
       <Row>
        <Col span={24} className="tableContainer " >
        <Table className="table"  bordered={true} columns={columns} dataSource={user} rowKey="_id" />
        </Col>
       </Row>
      </div>
    </div>
  ); 
}

export default index;
