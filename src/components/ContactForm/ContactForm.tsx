"use client";

import { useState } from "react";
import { Form, Input, Button, message, ConfigProvider } from "antd";
import { SendOutlined } from "@ant-design/icons";

const { TextArea } = Input;

import { FormValues } from "@/types/FormValues";

export default function ContactForm() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    console.log("Form submitted:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    form.resetFields();
    message.success("Message sent successfully!");
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3b82f6",
          colorBgContainer: "rgba(30, 41, 59, 0.5)",
          colorBorder: "rgba(148, 163, 184, 0.3)",
          colorText: "#ffffff",
          colorTextPlaceholder: "rgba(148, 163, 184, 0.6)",
          borderRadius: 8,
          controlHeight: 48,
        },
        components: {
          Input: {
            activeBorderColor: "#3b82f6",
            hoverBorderColor: "#60a5fa",
            activeShadow: "0 0 0 2px rgba(59, 130, 246, 0.1)",
          },
          Button: {
            primaryShadow: "0 4px 14px rgba(59, 130, 246, 0.4)",
          },
          Form: {
            labelColor: "#e2e8f0",
            colorError: "#f87171",
          },
        },
      }}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark={false}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="name"
            label={
              <span className="text-slate-300">
                Name <span className="text-red-400">*</span>
              </span>
            }
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" size="large" />
          </Form.Item>

          <Form.Item
            name="surname"
            label={
              <span className="text-slate-300">
                Surname <span className="text-red-400">*</span>
              </span>
            }
            rules={[{ required: true, message: "Please enter your surname" }]}
          >
            <Input placeholder="Enter your surname" size="large" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Form.Item
            name="phone"
            label={
              <span className="text-slate-300">
                PhoneNumber <span className="text-red-400">*</span>
              </span>
            }
            rules={[{ required: true, message: "Please enter your phone" }]}
          >
            <Input placeholder="Enter your phone" size="large" />
          </Form.Item>

          <Form.Item
            name="email"
            label={
              <span className="text-slate-300">
                Email <span className="text-red-400">*</span>
              </span>
            }
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Please enter a valid email" },
            ]}
          >
            <Input placeholder="Enter your email" size="large" />
          </Form.Item>
        </div>

        <Form.Item
          name="message"
          label={
            <span className="text-slate-300">
              Message <span className="text-red-400">*</span>
            </span>
          }
          rules={[{ required: true, message: "Please enter your message" }]}
        >
          <TextArea
            placeholder="Enter your message"
            rows={5}
            style={{ resize: "none", paddingTop: 12, paddingBottom: 12 }}
          />
        </Form.Item>

        <Form.Item className="!mb-0">
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            icon={!isSubmitting && <SendOutlined />}
            size="large"
            className="!h-12 !px-8 !text-base !font-medium !rounded-lg !bg-blue-500 hover:!bg-blue-600 !border-none !shadow-lg !shadow-blue-500/25"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}
