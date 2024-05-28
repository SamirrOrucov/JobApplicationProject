import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload, message } from "antd";
import React from "react";
import { BASE_URL } from "../../constants/base";

const { Dragger } = Upload;

const CvForm = ({ initialValues, onFinish, onPrev }) => {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (values) => {
    onFinish(values);
  };

  const handleFileChange = (info) => {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} faylı uğurla yükləndi.`);
    } else if (status === "error") {
      message.error(`${info.file.name} faylı yüklənmədi.`);
    }
  };

  const props = {
    name: "file",
    multiple: true,
    action: `${BASE_URL}upload`, 
    withCredentials: true, 
    onChange: handleFileChange,
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Form
      onFinish={handleSubmit}
      initialValues={initialValues}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <div className="cv-form">
        <h2>CV yükləyin</h2>
        <Form.Item>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Faylı yükləmək üçün bu sahəyə klikləyin və ya sürüşdürün
            </p>
            <p className="ant-upload-hint">
              Tək və ya çoxlu fayl yükləmək dəstəklənir. Şirkət məlumatlarını və ya digər qadağan olunmuş faylları yükləmək qəti qadağandır.
            </p>
          </Dragger>
        </Form.Item>
      </div>

      <div className="button">
        <Form.Item>
          <Button onClick={onPrev} className="prev-btn">
            Əvvəlki
          </Button>
          <Button type="primary" htmlType="submit">
            Başa çatdır
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default CvForm;
