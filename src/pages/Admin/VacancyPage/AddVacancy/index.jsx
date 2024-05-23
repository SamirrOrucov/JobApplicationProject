import React, { useEffect, useState } from "react";
import "./style.scss";
import { Button, Col, Form, Input, InputNumber, Row, Select, message } from "antd";
import axios from "axios";
import { ADMIN_TOKEN, BASE_URL } from "../../../../constants/base";
import { useForm } from "antd/es/form/Form";
const { TextArea } = Input;

function index() {
  const [companies, setCompanies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const successa = () => {
    messageApi.open({
      type: "success",
      content: "Vakansiya uğurla yaradıldı!",
      duration:1
    });
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    const transformedValues = {
      categoryId: parseInt(values.category),
      companyId: parseInt(values.company),
      vacancyDetail: {
        position: values.position,
        city: values.city,
        salary: parseFloat(values.salary),
        age: parseInt(values.age),
        education: values.education,
        jobExperience: values.jobExperience,
        relevantPerson: values.relevantPerson,
        candidateRequirements: values.candidateRequirements,
        jobInformation: values.jobInformation,
        email: values.email,
        contactNumber: values.contactNumber,
      },
    };
    axios
      .post(`${BASE_URL}admins/vacancy`, transformedValues, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdXRob3JpdGllcyI6WyJST0xFX0FETUlOIl0sInN1YiI6Im5paGF0QGRpdi5lZHUuYXoiLCJqdGkiOiIxIiwiaWF0IjoxNzE2NDEzNDQ1LCJleHAiOjE3MTY4NDU0NDV9.2heRzS80DLIrLrD6cBMBWjtewNNTuuwfhZ6SosWx8f4`,
          "Content-Type": "application/json; charset=UTF-8",
        },
      })
      
      .catch((error) => {
        console.error("Error:", error);
      });
      form.resetFields()
      successa()
  };

  const getCompanies = () => {
    axios
      .get(`${BASE_URL}admins/companies`, {
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
      })
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getCatagories = () => {
    axios
      .get(`${BASE_URL}admins/categories`, {
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
        },
      })
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getCompanies();
    getCatagories();
  }, []);
  const companyOptions = [];
  const categoryOptions = [];
  companies.map((item) => {
    companyOptions.push({
      value: item.id,
      label: item.name,
    });
  });
  categories.map((item) => {
    categoryOptions.push({
      value: item.id,
      label: item.name,
    });
  });
  return (
   <>
         {contextHolder}

    <Row>
      <Col span={24}>
        <Row style={{ textAlign: "center" }}>
          <Col span={24} className="formContainer">
            <Form
            form={form}
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 24,
              }}
              style={{
                maxWidth: 600,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
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
                  options={companyOptions}
                />
              </Form.Item>

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
                  options={categoryOptions}
                />
              </Form.Item>
              <Form.Item
                name="position"
                rules={[
                  {
                    required: true,
                    message: "Please add postion !", // Change the message here
                  },
                ]}
              >
                <Input placeholder="Vəzifə" />
              </Form.Item>
              <Form.Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "Please add city !", // Change the message here
                  },
                ]}
              >
                <Input placeholder="Şəhər" />
              </Form.Item>
              <Form.Item
                name="salary"
                rules={[
                  {
                    required: true,
                    message: "Please add salary !",
                  },
                ]}
              >
                <InputNumber className="input" placeholder="Maaş" />
              </Form.Item>
              <Form.Item
                name="age"
                rules={[
                  {
                    required: true,
                    message: "Please add age !",
                  },
                ]}
              >
                <InputNumber className="input" placeholder="Yaş" />
              </Form.Item>
              <Form.Item
                name="education"
                rules={[
                  {
                    required: true,
                    message: "Please add education !", // Change the message here
                  },
                ]}
              >
                <Input placeholder="Təhsil" />
              </Form.Item>
              <Form.Item
                name="jobExperience"
                rules={[
                  {
                    required: true,
                    message: "Please add job experience !", // Change the message here
                  },
                ]}
              >
                <Input placeholder="İş təcrübəsi" />
              </Form.Item>
              <Form.Item
                name="candidateRequirements"
                rules={[
                  {
                    required: true,
                    message: "Please add candidat requirements !", // Change the message here
                  },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={200}
                  placeholder="Namizədə tələblər"
                />
              </Form.Item>
              <Form.Item
                name="jobInformation"
                rules={[
                  {
                    required: true,
                    message: "Please add job informations!", // Change the message here
                  },
                ]}
              >
                <TextArea
                  showCount
                  maxLength={200}
                  placeholder="İş barədə məlumat"
                />
              </Form.Item>
              <Form.Item
                name="relevantPerson"
                rules={[
                  {
                    required: true,
                    message: "Please add relevant person!",
                  },
                ]}
              >
                <Input placeholder="Əlaqədar şəxs" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please add email!",
                  },
                ]}
              >
                <Input placeholder="Əlaqədar şəxsin emaili!" />
              </Form.Item>
              <Form.Item
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please add contact number!",
                  },
                ]}
              >
                <Input placeholder="Əlaqədar şəxsin nömrəsi!" />
              </Form.Item>
              <Row className="buttonContainer">
                <Col span={8}>
                  <Button htmlType="submit">Əlavə et</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Col>
    </Row>
   </>
  );
}

export default index;
