import { Button, Form, Input, InputNumber, Upload, Select ,message} from "antd";
import React from "react";
import styled from "styled-components";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { createPhone } from "../../../api/phone";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

/* eslint-enable no-template-curly-in-string */
const normFile = (e: any) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const { Option } = Select;

const PhoneAdd: React.FC = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    console.log('Success : ' , values);
    try {
      const data = await createPhone(values);
      message.success("Tạo mới thành công");
    } catch (err) {
        message.error("Đã xảy ra lỗi")
    }
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <H2>Thêm sản phẩm mới</H2>
      <FormAdd>
        <div style={{ textAlign: "left" }}>
          <Form.Item
            name="upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button
                style={{ width: "300px", height: "200px", marginLeft: "100px" }}
                icon={<PlusOutlined style={{ fontSize: "34px" }} />}
              ></Button>
            </Upload>
          </Form.Item>
          <Form.Item name={["desc"]} label="Mô tả" rules={[{ required: true }]}>
            <Input style={{ width: "300px", height: "100px" }} />
          </Form.Item>
        </div>
        <div>
          <H4>Thông tin sản phẩm</H4>
          <Form.Item
            name={["name"]}
            label="Tên sản phẩm"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["originalPrice"]}
            label="Giá gốc"
            rules={[{ type: "number" }]}
          >
            <InputNumber style={{ width: "622px" }} />
          </Form.Item>
          <Form.Item
            name={["saleOffPrice"]}
            label="Giá khuyến mãi"
            rules={[{ type: "number" }]}
          >
            <InputNumber style={{ width: "622px" }} />
          </Form.Item>

          <Form.Item name={["category"]} label="Danh mục" hasFeedback>
            <Select placeholder="Laptop" allowClear>
              <Option value="1">Pc</Option>
              <Option value="2">Phone</Option>
              <Option value="3">Option 3</Option>
            </Select>
          </Form.Item>

          <Form.Item name={["features"]} label="Đặc điểm nổi bật">
            <Input.TextArea style={{ height: "70px" }} />
          </Form.Item>
          <Form.Item name={["description"]} label="Mô tả dài">
            <Input.TextArea style={{ height: "70px" }} />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Thêm sản phẩm mới
            </Button>
          </Form.Item>
        </div>
      </FormAdd>
    </Form>
  );
};
const FormAdd = styled.form`
  text-align: left;
  display: grid;
  grid-template-columns: 300px auto;
`;
const H2 = styled.h2`
  color: black;
`;
const H4 = styled.h4`
  margin-left: 320px;
`;
export default PhoneAdd;