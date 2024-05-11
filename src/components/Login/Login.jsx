import React from "react";
import "./Login.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function Login() {
  return (
    <div className="login-container">
      <h1>Hesaba daxil ol</h1>
      <div className="login-content">
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
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="inputs">
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input className="input" placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="input" placeholder="Password" />
            </Form.Item>
          </div>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <div className="text-input">
              <Checkbox>Remember me</Checkbox>
              <Link to={"#"}>Forgot Password?</Link>
            </div>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              LOG IN
            </Button>
            <p className="have-acc">
              Don’t have account? <Link to={"/sign-in"}>Create an account</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
