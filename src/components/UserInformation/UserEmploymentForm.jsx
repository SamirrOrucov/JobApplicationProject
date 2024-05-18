import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Space,
  DatePicker,
  Select,
  Cascader,
} from "antd";
const { Option } = Select;
const { RangePicker } = DatePicker;
const options = [
  {
    label: "English",
    value: 1,
    children: [
      {
        label: "A1",
        value: 1,
      },
      {
        label: "A2",
        value: 2,
      },
      {
        label: "B1",
        value: 3,
      },
      {
        label: "B2",
        value: 4,
      },
    ],
  },
  {
    label: "Spanish",
    value: "2",
    children: [
      {
        label: "A1",
        value: 1,
      },
      {
        label: "A2",
        value: 2,
      },
      {
        label: "B1",
        value: 3,
      },
      {
        label: "B2",
        value: 4,
      },
    ],
  },
];

function UserEmploymentForm({ initialValues, onFinish, onPrev }) {
  const [employmentStatusId, setEmploymentStatusId] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleSubmit = (values) => {
    onFinish(values);
  };

  return (
    <Form
      onFinish={handleSubmit}
      initialValues={initialValues}
      onFinishFailed={onFinishFailed}
      layout="vertical"
    >
      <div className="inputs">
        <Form.Item
          label="Məşğulluq statusunuz (Həm işləyir, həm də təhsilinizi davam etdirirsinizsə qeyd edin)"
          name="employmentStatusDetail.employmentStatusId"
          rules={[
            {
              required: true,
              message: "Please select your employment status!",
            },
          ]}
        >
          <Radio.Group>
            <Space direction="vertical">
              <Radio.Button
                value={1}
                onChange={() => setEmploymentStatusId(1)}
                className="input"
              >
                İşləyirəm (məzun olduğunuz ixtisas üzrə)
              </Radio.Button>
              <Radio.Button
                value={2}
                onChange={() => setEmploymentStatusId(2)}
                className="input"
              >
                İşləyirəm (başqa ixtisas üzrə)
              </Radio.Button>
              <Radio.Button
                value={3}
                onChange={() => setEmploymentStatusId(3)}
                className="input"
              >
                İşsizəm
              </Radio.Button>
              <Radio.Button
                value={4}
                onChange={() => setEmploymentStatusId(4)}
                className="input"
              >
                Təhsilimi davam etdirirəm
              </Radio.Button>
            </Space>
          </Radio.Group>
        </Form.Item>

        {employmentStatusId === 1 || employmentStatusId === 2 ? (
          <>
            <Form.Item
              name="employmentStatusDetail.workPlace"
              rules={[
                { required: true, message: "Please input your workPlace!" },
              ]}
            >
              <Input placeholder="İş yerinin adı" className="input" />
            </Form.Item>
            <Form.Item
              name="employmentStatusDetail.position"
              rules={[
                { required: true, message: "Please input your position!" },
              ]}
            >
              <Input placeholder="Vəzifə" className="input" />
            </Form.Item>
            <Form.Item
              name="employmentStatusDetail.startDate"
              rules={[
                { required: true, message: "Please select your start date!" },
              ]}
            >
              <DatePicker
                placeholder="İşə qəbul olduğunuz il"
                className="input-select"
              />
            </Form.Item>
          </>
        ) : employmentStatusId === 4 ? (
          <>
            <Form.Item
              name="employmentStatusDetail.university"
              rules={[
                { required: true, message: "Please input your university!" },
              ]}
            >
              <Input placeholder="ATM-in tam adı" className="input" />
            </Form.Item>
            <Form.Item
              name="employmentStatusDetail.qualification"
              rules={[
                { required: true, message: "Please input your qualification!" },
              ]}
            >
              <Input placeholder="İxtisas" className="input" />
            </Form.Item>
            <Form.Item
              name="employmentStatusDetail.startAndEndDate"
              rules={[
                {
                  required: true,
                  message: "Please select your start and end date!",
                },
              ]}
            >
              <RangePicker
                placeholder={["Daxil olduğunuz il", "Məzun olduğunuz il"]}
                className="input-select"
              />
            </Form.Item>
          </>
        ) : null}

        <Form.Item
          name="softSkillsId"
          label="Bacarıqlarınız"
          rules={[
            {
              required: true,
              message: "Please select your soft skills!",
            },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            placeholder="Bacarıqlarınız"
            className="input-select"
            value={selectedSkills}
            onChange={setSelectedSkills}
            style={{ width: "100%" }}
            maxTagCount={"responsive"}
          >
            <Option value={1}>Effektiv ünsiyyət qurmaq bacarığı</Option>
            <Option value={2}>Araşdırma bacarığı</Option>
            <Option value={3}>Təqdimat bacarığı</Option>
            <Option value={4}>Komanda ilə işləmək </Option>
            <Option value={5}>Analitik düşünmək bacarığı</Option>
            <Option value={6}>Tənqidi təfəkkür </Option>
            <Option value={7}>Problem həll etmək bacarığı</Option>
            <Option value={8}>Rəqəmsal analiz bacarıqları</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="others"
          rules={[
            {
              required: true,
              message: "Please select your courses!",
            },
          ]}
        >
          <Input.TextArea
            rows={"5"}
            placeholder="Keçdiyiniz kurslar, əldə etdiyiniz sertifikatlar haqqında melumat verin"
          />
        </Form.Item>
        <Form.Item
          name="languages"
          rules={[
            {
              required: true,
              message: "Please select your courses!",
            },
          ]}
        >
          <Cascader
            style={{
              width: "100%",
            }}
            options={options}
            onChange={setLanguages}
            value={languages}
            multiple
            maxTagCount="responsive"
          />
        </Form.Item>

        <div className="button">
          <Form.Item>
            <Button onClick={onPrev} className="prev-btn">
              Əvvəlki
            </Button>
            <Button type="primary" htmlType="submit">
              Növbəti
            </Button>
          </Form.Item>
        </div>
      </div>
    </Form>
  );
}

export default UserEmploymentForm;
