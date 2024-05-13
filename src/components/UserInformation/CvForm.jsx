import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload, message } from "antd";
import React from "react";

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
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const props = {
    name: "file",
    multiple: true,
    action: "",
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
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
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
