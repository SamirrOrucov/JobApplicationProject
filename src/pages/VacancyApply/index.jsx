import React from "react";
import "./vacancyApply.scss";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';

const props = {
  name: 'file',
  multiple: true,
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

function VacancyApply() {
  return (
    <div>
      <div id="vacancyApply">
        <div className="container">
          <div className="vacancyApply_title_box">
            <img src="/kapital_bank_logo.svg" alt="" />
            <div className="vacancyApply_box_content">
              <h3 className="vacancyApply_box_content_title">
                BackEnd developer
              </h3>
              <p className="vacancyApply_box_content_text">Kapital Bank</p>
            </div>
          </div>

          <div className="vacancyApply_info_box">
            <form action="">
              <textarea
                name=""
                id=""
                cols="80"
                rows="8"
                placeholder="İşə qəbul olmaq üçün mətn"
              ></textarea>
            </form>
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
            <button>Tesdiqle</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancyApply;
