import React, { useState, useEffect } from "react";
import "./Login.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { BsEnvelope, BsShieldSlash } from "react-icons/bs";
import axios from "axios";
import { BASE_URL } from "../../constants/base";

const Login = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const onFinish = (values) => {
    UserLogin(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const UserLogin = (values) => {
    axios
      .post(`${BASE_URL}users/authentication`, values)
      .then((response) => {
        console.log("Success:", response.data);
        setError(null);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response && error.response.data) {
          setError(error.response.data.message);
        } else {
          setError("Gözlənilməz xəta baş verdi,az sonra yenidən yoxlayın");
        }
      });
  };

  return (
    <div className="login-container">
      <h1>Hesaba daxil ol</h1>
      <div className="login-content">
        <Form
          form={form}
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
              name="username"
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
                {
                  min: 8,
                  message: "Şifrə ən az 8 simvoldan ibarət olmalıdır!",
                },
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

          </Form.Item>

          <p className="have-acc">
            Hesabınız yoxdur? <Link to={"/register"}>Yeni hesab yaradın</Link>
          </p>
          {error && (
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
              validateStatus="error"
              help={error}
            ></Form.Item>
          )}
        </Form>
      </div>
    </div>
  );
};

export default Login;
