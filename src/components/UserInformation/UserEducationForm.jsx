// UserEducationForm.jsx
import React from "react";
import { Form, Input, Button } from "antd";

function UserEducationForm({ initialValues, onFinish, onPrev }) {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (values) => {
    onFinish(values);
  };

  return (
    <Form
      onFinish={handleSubmit}
      initialValues={initialValues}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please input your email!" },
          { type: "email", message: "Please enter a valid email address!" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <div className="button">
        <Form.Item>
          <Button onClick={onPrev} className="prev-btn">
            Əvvəlki
          </Button>
          <Button type="primary" htmlType="submit">
            Növbəti
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default UserEducationForm;
