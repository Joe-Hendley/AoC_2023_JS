import React from "react";
import { Button, Form, Input } from "antd";

interface formValues {
  sessionId: string;
}

const onFinish = (values: formValues) => {
  console.log(values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  aocInput?: string;
};

const { TextArea } = Input;

const InputReader: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      name="aocInput"
      rules={[
        {
          required: true,
          message: "Please enter your AoC input.",
        },
      ]}
    >
      <TextArea rows={4} placeholder="Session ID" />
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default InputReader;
