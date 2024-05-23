import React, { useEffect } from "react";
import { Form, Select, DatePicker, Button } from "antd";
import moment from "moment";

const { Option } = Select;
const { RangePicker } = DatePicker;

const educationLevels = [
  { id: 1, name: "Bakalavr" },
  { id: 2, name: "Magistr" },
  { id: 3, name: "Digər" },
];

const qualifications = [
  { id: 1, name: "Mühəndislik" },
  { id: 2, name: "Tibb" },
  { id: 3, name: "Biznes İdarəçiliyi" },
  { id: 4, name: "İncəsənət" },
  { id: 5, name: "Elmlər" },
];

function UserEducationForm({ initialValues, onFinish, onPrev }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      const startAndEndDate = initialValues?.educationLevelDetail
        ?.startAndEndDate
        ? initialValues.educationLevelDetail.startAndEndDate
            .split(" to ")
            .map((date) => moment(date))
        : null;

      form.setFieldsValue({
        educationLevelDetail: {
          ...initialValues.educationLevelDetail,
          startAndEndDate,
        },
      });
    }
  }, [initialValues, form]);

  const handleSubmit = (values) => {
    const startAndEndDate = values.educationLevelDetail.startAndEndDate
      ? values.educationLevelDetail.startAndEndDate
          .map((date) => date.format("YYYY-MM-DD"))
          .join(" to ")
      : null;

    const transformedValues = {
      educationLevelDetail: {
        ...values.educationLevelDetail,
        startAndEndDate,
      },
    };
    onFinish(transformedValues);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      onFinishFailed={(errorInfo) => console.log("Failed:", errorInfo)}
      layout="vertical"
    >
      <div className="inputs" style={{ paddingTop: "20px" }}>
        <Form.Item
          label="Təhsil Səviyyəsi"
          name={["educationLevelDetail", "educationLevelId"]}
          rules={[{ required: true, message: "Təhsil səviyyənizi seçin!" }]}
        >
          <Select
            placeholder="Təhsil səviyyənizi seçin"
            className="input-select"
            style={{ width: "100%" }}
          >
            {educationLevels.map((level) => (
              <Option key={level.id} value={level.id}>
                {level.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="İxtisas"
          name={["educationLevelDetail", "qualification"]}
          rules={[{ required: true, message: "İxtisasınızı seçin!" }]}
        >
          <Select
            placeholder="İxtisasınızı seçin"
            className="input-select"
            style={{ width: "100%" }}
          >
            {qualifications.map((qualification) => (
              <Option key={qualification.id} value={qualification.name}>
                {qualification.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Təhsil aldığınız tarix aralığı"
          name={["educationLevelDetail", "startAndEndDate"]}
          rules={[
            {
              type: "array",
              required: true,
              message: "Tarix aralığını seçin!",
            },
          ]}
        >
          <RangePicker
            format="YYYY-MM-DD"
            className="input-select"
            style={{ width: "100%" }}
            placeholder={["Başlama Tarixi", "Bitmə Tarixi"]}
          />
        </Form.Item>
      </div>
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
    </Form>
  );
}

export default UserEducationForm;
