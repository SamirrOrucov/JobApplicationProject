import { Button, Col, Row } from "antd";
import React from "react";
import "./AdminNavTop.scss"
function AdminNavTop() {
  return (
    <div className="adminNav">
      <div className="adminNavContainer">
        <div className="adminNavTop">
          <Row align={"middle"}>
            <Col span={24}>
              <Row className="adminNavTop_row">
                <Col span={4} className="logo"><img src="/aztuLogo.png" alt="" /></Col>
                <Col span={16} className="headerText">Admin Panel</Col>
                <Col span={4}><Button className="button">Ana Səhifə</Button></Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AdminNavTop;
