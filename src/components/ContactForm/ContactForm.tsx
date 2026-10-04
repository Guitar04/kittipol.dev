"use client";

import { useState } from "react";
import { App, Button, ConfigProvider, Form, Input } from "antd";

import type { FormValues } from "@/types/FormValues";

const { TextArea } = Input;

const label = (text: string) => <span className="label">{text}</span>;

function ContactFormInner() {
  const [form] = Form.useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { message } = App.useApp();

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    // TODO: wire this up to a real endpoint (API route, Resend, Formspree…).
    // Until then the submission is simulated and only logged locally.
    console.log("Form submitted:", values);
    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    form.resetFields();
    message.success("Your message has been sent. Thank you for reaching out.");
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      requiredMark={false}
    >
      <Form.Item
        name="subject"
        label={label("Subject")}
        rules={[{ required: true, message: "Please enter a subject" }]}
      >
        <Input placeholder="Subject of your enquiry" />
      </Form.Item>

      <div className="grid gap-x-5 sm:grid-cols-2">
        <Form.Item
          name="name"
          label={label("Name")}
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="First name" />
        </Form.Item>

        <Form.Item
          name="surname"
          label={label("Surname")}
          rules={[{ required: true, message: "Please enter your surname" }]}
        >
          <Input placeholder="Last name" />
        </Form.Item>
      </div>

      <div className="grid gap-x-5 sm:grid-cols-2">
        <Form.Item
          name="email"
          label={label("Email")}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="you@company.com" inputMode="email" />
        </Form.Item>

        <Form.Item
          name="phone"
          label={label("Phone")}
          rules={[{ required: true, message: "Please enter your phone number" }]}
        >
          <Input placeholder="+66 00 000 0000" inputMode="tel" />
        </Form.Item>
      </div>

      <Form.Item
        name="message"
        label={label("Message")}
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <TextArea
          placeholder="Project scope, technical requirements and expected timeline."
          rows={5}
          style={{ resize: "none", paddingTop: 10, paddingBottom: 10 }}
        />
      </Form.Item>

      <Form.Item className="!mb-0">
        <Button
          type="primary"
          htmlType="submit"
          loading={isSubmitting}
          className="!h-10 !px-5 !text-[0.85rem]"
        >
          {isSubmitting ? "Sending" : "Send message"}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default function ContactForm() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5b8def",
          colorBgContainer: "transparent",
          colorBgElevated: "#121215",
          colorBorder: "rgba(255, 255, 255, 0.12)",
          colorText: "#ededee",
          colorTextPlaceholder: "rgba(108, 108, 118, 0.85)",
          borderRadius: 6,
          controlHeight: 40,
          fontSize: 14,
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        },
        components: {
          Input: {
            activeBorderColor: "rgba(91, 141, 239, 0.8)",
            hoverBorderColor: "rgba(255, 255, 255, 0.22)",
            activeShadow: "0 0 0 2px rgba(91, 141, 239, 0.12)",
            paddingInline: 12,
          },
          Button: {
            primaryShadow: "none",
            colorPrimaryHover: "#7ba3f3",
            colorTextLightSolid: "#0a0a0b",
            fontWeight: 500,
          },
          Form: {
            itemMarginBottom: 18,
            verticalLabelPadding: "0 0 7px",
          },
        },
      }}
    >
      <App>
        <ContactFormInner />
      </App>
    </ConfigProvider>
  );
}
