import React from 'react'
import "./style.scss";
import { Button, Col, Form, Row, Select } from "antd";
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { Input } from 'antd';
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
const index = () => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    return (
        <div >
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
            >
                {/* <Row className="addVacancy"> */}
                {/* <Col className="addVacancy_container" span={24}> */}
                {/* <Row> */}
                {/* <Col span={12}> */}
                <Form.Item
                    name="company"
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}
                >
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
                {/* </Col> */}
                {/* </Row> */}
                {/* <Row className="marginTopClass"> */}
                {/* <Col span={12}> */}
                <Form.Item
                    name="companyName"
                    rules={[
                        {
                            required: true,
                            message: "Please select a category!", // Change the message here
                        },
                    ]}
                >
                    <Input placeholder="Şirkət Adı" />
                </Form.Item>
                {/* </Col> */}
                {/* </Row>/ */}
                {/* </Col> */}
                {/* </Row> */}
                <Row className="buttonContainer">
                    <Col span={8}>
                        <Button htmlType="submit">Əlavə et</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default index