// UserEmploymentForm.jsx
import React from "react";
import { Form, Input, Button } from "antd";

function UserEmploymentForm({ initialValues, onFinish, onPrev }) {
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
        label="Address"
        name="aress"
        rules={[{ required: true, message: "Please input your address!" }]}
      >
        <Input.TextArea rows={4} placeholder="Enter your address" />
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

export default UserEmploymentForm;
