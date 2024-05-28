import { Steps, Button } from "antd";
import React, { useState } from "react";
import { BiFileBlank } from "react-icons/bi";
import { BsBook, BsPerson, BsPersonWorkspace } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import CvForm from "./CvForm";
import UserEducationForm from "./UserEducationForm";
import UserEmploymentForm from "./UserEmploymentForm";
import UserInfoForm from "./UserInfoForm";
import "./UserInformation.scss";
import { BASE_URL } from "../../constants/base";

const { Step } = Steps;

const UserInformation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialValues = location.state?.initialValues || {};
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialValues);

  const handleNext = (values) => {
    setFormData({ ...formData, ...values });
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values) => {
    const newData = { ...formData, ...values };
    const { confirm, agreement, aaaa, ...dataToSubmit } = newData;
    const { name, surname, email, password, ...userInfoData } = dataToSubmit;
    const finalData = {
      userInformation: userInfoData,
      name,
      surname,
      email,
      password,
    };

    console.log("Final form data:", finalData);

    axios
      .post(`${BASE_URL}users/registration`, values)
      .then((response) => {
        console.log("Registration Success:", response.data);
        const token = response.data.token;
        Cookies.set("token", token, {
          path: "/",
          secure: true,
          sameSite: "strict",
        });
        navigate("/user-information", { state: { initialValues: values } });
      })
      .catch((error) => {
        console.error("Registration Error:", error);
      });
  };

  const steps = [
    {
      title: "Şəxsi Məlumatlar",
      icon: <BsPerson />,
      content: <UserInfoForm onFinish={handleNext} initialValues={formData} />,
    },
    {
      title: "Təhsil",
      icon: <BsBook />,
      content: (
        <UserEducationForm
          onFinish={handleNext}
          onPrev={handlePrev}
          initialValues={formData}
        />
      ),
    },
    {
      title: "Təcrübə",
      icon: <BsPersonWorkspace />,
      content: (
        <UserEmploymentForm
          onFinish={handleNext}
          onPrev={handlePrev}
          initialValues={formData}
        />
      ),
    },
    {
      title: "CV",
      icon: <BiFileBlank />,
      content: (
        <CvForm
          onFinish={onFinish}
          onPrev={handlePrev}
          initialValues={formData}
        />
      ),
    },
  ];

  return (
    <div className="userInformation-container">
      <h1>İstifadəçi məlumatları</h1>
      <div className="userInformation-content">
        <Steps current={currentStep}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>
        <div>{steps[currentStep].content}</div>
      </div>
    </div>
  );
};

export default UserInformation;
