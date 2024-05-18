import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { BsEnvelope, BsPerson, BsShield, BsShieldSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./SignIn.scss";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
function SignIn() {
  return (
    <div className="signin-container">
      <h1>İstifadəçi qeydiyyatı</h1>
      <div className="signin-content">
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
              name="name"
              rules={[
                {
                  required: true,
                  message: "Zəhmət olmasa adınızı daxil edin!",
                },
              ]}
            >
              <Input className="input" prefix={<BsPerson />} placeholder="Ad" />
            </Form.Item>

            <Form.Item
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Zəhmət olmasa soyadınızı daxil edin!",
                },
              ]}
            >
              <Input
                className="input"
                prefix={<BsPerson />}
                placeholder="Soyad"
              />
            </Form.Item>

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
              name="fin"
              rules={[
                {
                  required: true,
                  message: "Zəhmət olmasa FİN kodunuzu daxil edin!",
                },
                {
                  min: 7,
                  max: 7,
                  message: "FİN kod 7 simvoldan ibarət olmalıdır!",
                },
              ]}
            >
              <Input
                className="input"
                onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
                prefix={<BsShield />}
                placeholder="FİN"
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

            <Form.Item
              name="confirm"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Zəhmət olmasa şifrənizi təsdiqləyin!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("Daxil etdiyiniz yeni şifrə uyğun gəlmir!")
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                className="input"
                prefix={<BsShieldSlash />}
                placeholder="Şifrəni təsdiqləyin"
              />
            </Form.Item>
          </div>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Şərtləri qəbul etməlisiniz!")),
              },
            ]}
          >
            <div className="text-input">
              <Checkbox>
                <Link to="#">Şərtləri</Link> qəbul edirəm
              </Checkbox>
            </div>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              QEYDİYYAT
            </Button>
            <p className="have-acc">
              Hesabınız var? <Link to={"/login"}>Giriş</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
