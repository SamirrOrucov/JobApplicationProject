import React from "react";
import "./Login.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { BsEnvelope, BsShieldSlash } from "react-icons/bs";
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
                  message: "Zəhmət olmasa e-mailinizi daxil edin!",
                },
                {
                  type: "email",
                  message: "E-mail düzgün deyil!",
                },
              ]}
            >
              <Input
                className="input"
                prefix={<BsEnvelope />}
                placeholder="E-mail"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Zəhmət olmasa şifrənizi daxil edin!",
                },
                { min: 8, message: "Şifrə ən az 8 simvoldan ibarət olmalıdır!" },
              ]}
            >
              <Input.Password
                className="input"
                prefix={<BsShieldSlash />}
                placeholder="Şifrə"
              />
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
              <Checkbox>Yadda saxla</Checkbox>
              <Link to={"#"}>Şifrəni unutdum</Link>
            </div>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              GİRİŞ
            </Button>
            <p className="have-acc">
              Hesabınız yoxdur? <Link to={"/register"}>Yeni hesab yaradın</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
