import { Steps } from "antd";
import React, { useState } from "react";
import { BiFileBlank } from "react-icons/bi";
import { BsBook, BsPerson, BsPersonWorkspace } from "react-icons/bs";
import CvForm from "./CvForm";
import UserEducationForm from "./UserEducationForm";
import UserEmploymentForm from "./UserEmploymentForm";
import UserInfoForm from "./UserInfoForm";
import "./UserInformation.scss";

const { Step } = Steps;

function UserInformation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (values) => {
    setFormData({ ...formData, ...values });
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const onFinish = (values) => {
    setFormData({ ...formData, ...values });
    console.log("Final form data:", formData);
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
}

export default UserInformation;
