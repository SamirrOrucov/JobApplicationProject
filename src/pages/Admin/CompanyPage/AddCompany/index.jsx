import React from "react";
import "./style.scss";
import { Button, Col, Form, Row, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Input } from "antd";
import axios from "axios";
import { ADMIN_TOKEN, BASE_URL } from "../../../../constants/base";

const Index = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: "Vakansiya uğurla yaradıldı!",
      duration: 1,
    });
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinish = async (values) => {
    try {
      const formData = new FormData();

      const data = {
        name: values.data,
      };
      formData.append("data", JSON.stringify(data));

      if (values.image) {
        values.image.forEach((file) => {
          formData.append("image", file.originFileObj);
        });
      }

      await axios.post(`${BASE_URL}admins/companies`, formData, {
        headers: {
          Authorization: `Bearer ${ADMIN_TOKEN}`,
          Accept:"application/json"
        },
      });

      form.resetFields();
      successMessage();
    } catch (error) {
      console.error("Error submitting form:", error);
      messageApi.open({
        type: "error",
        content: "Error submitting form. Please try again.",
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" beforeUpload={() => false} maxCount={1}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Faylı seçmək üçün sahəyə klikləyin
            </p>
            <p className="ant-upload-hint">Sadəcə bir fayl dəstəklənir</p>
          </Upload.Dragger>
        </Form.Item>

        <Form.Item
          name="data"
          rules={[{ required: true, message: "Please set name!" }]}
        >
          <Input placeholder="Şirkət Adı" />
        </Form.Item>

        <Row className="buttonContainer">
          <Col span={8}>
            <Button htmlType="submit">Əlavə et</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Index;
