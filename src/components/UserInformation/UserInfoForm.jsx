import { Button, DatePicker, Form, Input, Select } from "antd";
import PhoneInput from "antd-phone-input";
import React, { useState } from "react";
const { Option } = Select;
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import { BsHouse, BsHouseDoor, BsPerson } from "react-icons/bs";
import { CiMap } from "react-icons/ci";
import { BiHome, BiHomeAlt, BiHomeAlt2, BiMap, BiMapPin } from "react-icons/bi";
import { FaMapLocation } from "react-icons/fa6";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
function UserInfoForm({ initialValues, onFinish }) {
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (values) => {
    const phoneNumberObj = values.phoneNumber;
    const formattedPhoneNumber = `+${phoneNumberObj.countryCode}${phoneNumberObj.areaCode}${phoneNumberObj.phoneNumber}`;
    const formattedValues = {
      ...values,
      phoneNumber: formattedPhoneNumber,
    };
    onFinish(formattedValues);
  };
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={initialValues}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="avatar">
        <h2>Profil şəkli</h2>
        <Upload
          listType="picture-circle"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{
              display: "none",
            }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage(""),
            }}
            src={previewImage}
          />
        )}
      </div>
      <div className="inputs">
        <div className="line">
          <Form.Item
            label="Ata adı"
            name="fatherName"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              className="input"
              prefix={<BsPerson />}
              placeholder="Atanızın adı"
            />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Əlaqə nömrəsi"
            rules={[{ required: true, message: "Enter correct number" }]}
          >
            <PhoneInput disableDropdown />
          </Form.Item>
        </div>
        <div className="line">
          <Form.Item
            label="Qeydiyyatda olduğunuz ünvan"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input className="input" prefix={<BiMap />} placeholder="Ünvan 1" />
          </Form.Item>

          <Form.Item
            label="Faktiki yaşadığınız ünvan"
            name="liveAddress"
            rules={[
              {
                required: true,
                message: "Please input your address!",
              },
            ]}
          >
            <Input
              className="input"
              prefix={<BsHouseDoor />}
              placeholder="Ünvan 2"
            />
          </Form.Item>
        </div>
        <div className="line">
          <Form.Item
            label="Doğum tarixi"
            name="birthdate"
            rules={[
              {
                type: "object",
                required: true,
                message: "Please select time!",
              },
            ]}
          >
            <DatePicker
              className="input-select"
              placeholder="Doğum tarixiniz"
            />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Cinsiniz"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="Cinsiniz" className="input-select">
              <Option value="1">Kişi</Option>
              <Option value="2">Qadın</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="line">
          <Form.Item
            name="maritalStatusId"
            label="Mədəni halınız"
            rules={[
              {
                required: true,
                message: "Please select marital status!",
              },
            ]}
          >
            <Select placeholder="Mədəni halınız" className="input-select">
              <Option value="1">Evli</Option>
              <Option value="2">Subay</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="militaryQualificationId"
            label="Hərbi mükəlləfiyyətiniz"
            rules={[
              {
                required: true,
                message: "Please select military qualification!",
              },
            ]}
          >
            <Select
              placeholder="Hərbi mükəlləfiyyətiniz"
              className="input-select"
            >
              <Option value="1">Var</Option>
              <Option value="2">Yoxdur</Option>
              <Option value="3">Hərbi xidmətə yollanıram</Option>
              <Option value="4">Müvəqqəti olaraq getmirəm</Option>
              <Option value="5">Digər</Option>
            </Select>
          </Form.Item>
        </div>
      </div>
      <div className="button">
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Növbəti
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}

export default UserInfoForm;
