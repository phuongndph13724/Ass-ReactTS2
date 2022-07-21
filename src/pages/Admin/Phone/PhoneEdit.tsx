import { Button, Form, Input, InputNumber, Upload, Select, Row, Col } from "antd";
import React from "react";
import styled from "styled-components";
import { UploadOutlined } from "@ant-design/icons";
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

const PhoneEdit: React.FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
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
            <Upload name="logo" action="" listType="picture">
              <Button
                style={{ width: "300px", height: "200px", marginLeft: "100px" }}
                icon={<UploadOutlined />}
              >
                Thêm Ảnh
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name={["phone", "desc"]}
            label="Mô tả"
            rules={[{ required: true }]}
          >
            <Input style={{ width: "300px", height: "100px" }} />
          </Form.Item>
        </div>
        <div>
          <H4>Thông tin sản phẩm</H4>
          <Form.Item
            name={["phone", "name"]}
            label="Tên sản phẩm"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Row gutter={16} style={{marginLeft:"300px"}}>
            <Col span={12}>
              <Form.Item
                name="originalPrice"
                label="Giá gốc"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Gía sản phẩm" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="saleOffPrice"
                label="Giá giảm"
                labelCol={{ span: 24 }}
                rules={[{ required: true, message: "Gía sản phẩm" }]}
              >
                <InputNumber style={{ width: "100%" }} size="large" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name={["phone", "category"]} label="Danh mục" hasFeedback>
            <Select placeholder="Laptop" allowClear>
              <Option value="1">Pc</Option>
              <Option value="2">Phone</Option>
              <Option value="3">Option 3</Option>
            </Select>
          </Form.Item>

          <Form.Item name={["phone", "features"]} label="Đặc điểm nổi bật">
            <Input.TextArea style={{ height: "70px" }} />
          </Form.Item>
          <Form.Item name={["phone", "descs"]} label="Mô tả dài">
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
export default PhoneEdit;
