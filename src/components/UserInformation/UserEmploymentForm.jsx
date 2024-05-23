import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Radio,
  Select,
  Space,
} from "antd";
import React, { useState, useEffect } from "react";
import { BsPencil } from "react-icons/bs";
import moment from "moment";

const { Option } = Select;

const languageLevelId = [
  { label: "A1", value: 1 },
  { label: "A2", value: 2 },
  { label: "B1", value: 3 },
  { label: "B2", value: 4 },
  { label: "C1", value: 5 },
  { label: "C2", value: 6 },
];

const options = [
  { label: "İngilis dili", value: 1, children: languageLevelId },
  { label: "Türk dili", value: 2, children: languageLevelId },
  { label: "İspan dili", value: 3, children: languageLevelId },
  { label: "Fransız dili", value: 4, children: languageLevelId },
  { label: "Alman dili", value: 5, children: languageLevelId },
  { label: "İtalyan dili", value: 6, children: languageLevelId },
  { label: "Çin dili", value: 7, children: languageLevelId },
  { label: "Rus dili", value: 8, children: languageLevelId },
  { label: "Ərəb dili", value: 9, children: languageLevelId },
];

function UserEmploymentForm({ initialValues, onFinish, onPrev }) {
  const [form] = Form.useForm();
  const [employmentStatusId, setEmploymentStatusId] = useState(
    initialValues?.employmentStatusDetail?.employmentStatusId || 0
  );
  const [selectedSkills, setSelectedSkills] = useState(
    initialValues?.softSkillsId || []
  );

  useEffect(() => {
    const startDate = initialValues?.employmentStatusDetail?.startDate
      ? moment(initialValues.employmentStatusDetail.startDate)
      : null;

    form.setFieldsValue({
      ...initialValues,
      employmentStatusDetail: {
        ...initialValues?.employmentStatusDetail,
        startDate,
      },
      languages: initialValues?.languages?.map((item) => ({
        languageAndLevel: [item.languageId, item.languageLevelId],
      })),
    });
  }, [initialValues, form]);

  const handleSubmit = (values) => {
    const transformedValues = {
      ...values,
      employmentStatusDetail: {
        ...values.employmentStatusDetail,
        startDate: values.employmentStatusDetail?.startDate
          ? values.employmentStatusDetail.startDate.format("YYYY-MM-DD")
          : null,
      },
      languages: values.languages?.map((item) => ({
        languageId: item.languageAndLevel[0],
        languageLevelId: item.languageAndLevel[1],
      })),
    };
    onFinish(transformedValues);
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <div className="inputs">
        <div className="input-line">
          <div className="employment">
            <Form.Item
              label="Məşğulluq statusunuz"
              name={["employmentStatusDetail", "employmentStatusId"]}
              rules={[
                {
                  required: true,
                  message: "Məşğulluq statusunuzu seçin!",
                },
              ]}
            >
              <Radio.Group
                onChange={(e) => setEmploymentStatusId(e.target.value)}
                value={employmentStatusId}
              >
                <Radio.Button
                  value={1}
                  style={{ height: "40px", paddingTop: "5px" }}
                >
                  İşləyirəm
                </Radio.Button>
                <Radio.Button
                  value={2}
                  style={{ height: "40px", paddingTop: "5px" }}
                >
                  İşsizəm
                </Radio.Button>
              </Radio.Group>
            </Form.Item>

            {employmentStatusId === 1 && (
              <div className="employment-inputs">
                <Form.Item
                  name={["employmentStatusDetail", "workPlace"]}
                  rules={[
                    { required: true, message: "İş yerinin adını daxil edin!" },
                  ]}
                >
                  <Input
                    placeholder="İş yerinin adı"
                    prefix={<BsPencil />}
                    className="input"
                  />
                </Form.Item>
                <Form.Item
                  name={["employmentStatusDetail", "position"]}
                  rules={[
                    { required: true, message: "Vəzifənizi daxil edin!" },
                  ]}
                >
                  <Input
                    placeholder="Vəzifə"
                    prefix={<BsPencil />}
                    className="input"
                  />
                </Form.Item>
                <Form.Item
                  name={["employmentStatusDetail", "startDate"]}
                  rules={[
                    {
                      type: "object",
                      required: true,
                      message: "İşə qəbul olduğunuz ili seçin!",
                    },
                  ]}
                >
                  <DatePicker
                    format="YYYY-MM-DD"
                    placeholder="İşə qəbul olduğunuz il"
                    className="input-select"
                  />
                </Form.Item>
              </div>
            )}
          </div>

          <div className="language">
            <p>Hansı xarici dilləri bilirsiniz?</p>
            <div className="language-inputs">
              <Form.List
                name="languages"
                rules={[{ required: true, message: "Xarici dili seçin!" }]}
              >
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space key={key} align="baseline">
                        <Form.Item
                          {...restField}
                          name={[name, "languageAndLevel"]}
                          fieldKey={[fieldKey, "languageAndLevel"]}
                          rules={[
                            {
                              required: true,
                              message: "Xarici dili seçin!",
                            },
                          ]}
                        >
                          <Cascader
                            options={options}
                            placeholder="Dil və səviyyəni seçin"
                            style={{ width: "100%" }}
                            className="input-select"
                          />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button
                        type="dashed"
                        onClick={() => add()}
                        block
                        icon={<PlusOutlined />}
                        className="input-select"
                      >
                        Dil əlavə et
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </div>
          </div>
        </div>

        <Form.Item
          name="softSkillsId"
          label="Bacarıqlarınız"
          rules={[{ required: true, message: "Bacarıqlarınızı seçin!" }]}
        >
          <Select
            mode="multiple"
            allowClear
            placeholder="Bacarıqlarınızı seçin"
            value={selectedSkills}
            onChange={setSelectedSkills}
            style={{ width: "100%" }}
            className="input-select"
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
              message:
                "Keçdiyiniz kurslar və sertifikatlar haqqında məlumat verin!",
            },
          ]}
        >
          <Input.TextArea
            rows={4}
            placeholder="Keçdiyiniz kurslar, əldə etdiyiniz sertifikatlar haqqında məlumat verin"
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

export default UserEmploymentForm;
