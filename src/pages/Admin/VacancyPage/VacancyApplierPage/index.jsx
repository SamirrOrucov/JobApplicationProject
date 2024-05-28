import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { Button, Col, Modal, Row, Select, Space, Table } from "antd";

function index() {
  const user = [
    {
      id: "2142332512",
      name: "Kapital Bank",
      cv: "https://s6.dosya.tc/server20/t9v1kd/SamirOurcov_CV_v3.0_eng.pdf.html",
      user: "Samir Orucov",
      text: "Fullstack developer olaraq başladığım yolda texniki tərəfdən biliklərimi Biznes Analitik olaraq davam etdirəcəm.Bu sahəyə çox marağım var və istəyərdim ki sizin şirkətdə bilik qazanmaq həm sizə həmdə özümə dəyər qatmaq şansını mənə verərdiz.Bura qədər oxuduğunuz üçün sizə təşəkkür edirəm.",
      createdAt: "09.05.2024",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userText, setUserText] = useState("");
  console.log(userText);
  const showModal = (value) => {
    setIsModalOpen(true);
    setUserText(value);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const columns = [
    {
      title: "Tarix",
      dataIndex: "createdAt",
      key: "createdAt",
      width: 200,

      defaultSortOrder: "descend",
      sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
      render: (text, record) =>
        record.createdAt.slice(11, 16) +
        " " +
        " " +
        record.createdAt.slice(0, 10),
    },
    {
      title: "Müraciət edən",
      dataIndex: "user",
      key: "user",
      width: 600,
    },
    {
      title: "Qəbul Mətni",
      dataIndex: "text",
      width: 600,
      key: "name",
      render: (text, record) => <Space>{text.slice(0, 100)}</Space>,
    },

    {
      title: "Cv",
      dataIndex: "cv",
      key: "cv",
      width: 200,
      render: (text, record) => (
        <Space>
          <Link to={text}>Cv faylı</Link>
        </Space>
      ),
    },

    {
      title: "Action",
      key: "action",
      width: 150,

      render: (text, record) => (
        <Space size="middle">
          <Link onClick={() => showModal(text.text)}>Open</Link>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Table
        className="table"
        bordered={true}
        columns={columns}
        dataSource={user}
        rowKey="_id"
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{userText}</p>
      </Modal>
    </>
  );
}

export default index;
