import React from "react";
import "./style.scss";
import { Button, Col, Form, Row, Select } from "antd";

function index() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {/* <Row className="addVacancy"> */}
        {/* <Col className="addVacancy_container" span={24}> */}
          {/* <Row> */}
            {/* <Col span={12}> */}
              <Form.Item
                name="company"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Select
                  showSearch
                  className="addVacancy_container_company"
                  style={{
                    width: 490,
                  }}
                  placeholder="Şirkəti seçin"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Kapital Bank",
                    },
                    {
                      value: "2",
                      label: "Abb",
                    },
                    {
                      value: "3",
                      label: "Sabah.hub",
                    },
                    {
                      value: "4",
                      label: "Norm sement",
                    },
                  ]}
                />
              </Form.Item>
            {/* </Col> */}
          {/* </Row> */}
          {/* <Row className="marginTopClass"> */}
            {/* <Col span={12}> */}
            <Form.Item
      name="category"
      rules={[
        {
          required: true,
          message: "Please select a category!", // Change the message here
        },
      ]}
    >
      <Select
        showSearch
        className="addVacancy_container_company"
        style={{
          width: 490,
        }}
        placeholder="Kateqoriya seçin"
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label ?? "").includes(input)
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={[
          {
            value: "1",
            label: "Informasiya Texnologiyaları",
          },
          {
            value: "2",
            label: "Maaliyyə",
          },
          {
            value: "3",
            label: "Marketing",
          },
          {
            value: "4",
            label: "Mühasibat",
          },
        ]}
      />
    </Form.Item>
            {/* </Col> */}
          {/* </Row>/ */}
        {/* </Col> */}
      {/* </Row> */}
      <Row className="buttonContainer">
        <Col span={8}>
          <Button htmlType="submit">Əlavə et</Button>
        </Col>
      </Row>
    </Form>
  );
}

export default index;
