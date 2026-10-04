"use client";

import { useState } from "react";
import { Button, ConfigProvider, Form, Input, App } from "antd";
import { Send } from "lucide-react";

import type { FormValues } from "@/types/FormValues";

const { TextArea } = Input;

const label = (text: string, required = true) => (
  <span className="font-mono text-[0.66rem] tracking-[0.16em] text-faint uppercase">
    {text}
    {required ? <span className="ml-1 text-accent">*</span> : null}
  </span>
);

function ContactFormInner() {
  const [form] = Form.useForm<FormValues>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { message } = App.useApp();

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    // TODO: wire this up to a real endpoint (API route, Resend, Formspree…).
    // Until then the submission is simulated and only logged locally.
    console.log("Form submitted:", values);
    await new Promise((resolve) => setTimeout(resolve, 900));

    setIsSubmitting(false);
    form.resetFields();
    message.success("Message sent — thanks for reaching out.");
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleSubmit} requiredMark={false}>
      <Form.Item
        name="subject"
        label={label("Subject")}
        rules={[{ required: true, message: "Please enter a subject" }]}
      >
        <Input placeholder="What is this about?" size="large" />
      </Form.Item>

      <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
        <Form.Item
          name="name"
          label={label("Name")}
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Jane" size="large" />
        </Form.Item>

        <Form.Item
          name="surname"
          label={label("Surname")}
          rules={[{ required: true, message: "Please enter your surname" }]}
        >
          <Input placeholder="Doe" size="large" />
        </Form.Item>
      </div>

      <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
        <Form.Item
          name="phone"
          label={label("Phone")}
          rules={[{ required: true, message: "Please enter your phone number" }]}
        >
          <Input placeholder="+66 ..." size="large" inputMode="tel" />
        </Form.Item>

        <Form.Item
          name="email"
          label={label("Email")}
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input placeholder="you@company.com" size="large" inputMode="email" />
        </Form.Item>
      </div>

      <Form.Item
        name="message"
        label={label("Message")}
        rules={[{ required: true, message: "Please enter your message" }]}
      >
        <TextArea
          placeholder="Scope, timeline, and anything that would help me answer well."
          rows={5}
          style={{ resize: "none", paddingTop: 12, paddingBottom: 12 }}
        />
      </Form.Item>

      <Form.Item className="!mb-0">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="primary"
            htmlType="submit"
            loading={isSubmitting}
            icon={!isSubmitting && <Send className="size-4" />}
            size="large"
            className="!h-12 !rounded-full !border-none !px-7 !text-[0.92rem] !font-medium"
          >
            {isSubmitting ? "Sending…" : "Send message"}
          </Button>

          <p className="text-[0.78rem] leading-relaxed text-faint">
            Prefer email? Write to{" "}
            <a
              href="mailto:kittipol.lkt@gmail.com"
              className="link-underline text-muted"
            >
              kittipol.lkt@gmail.com
            </a>
          </p>
        </div>
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
          colorBgContainer: "rgba(255, 255, 255, 0.035)",
          colorBgElevated: "#10131c",
          colorBorder: "rgba(255, 255, 255, 0.10)",
          colorText: "#e9edf5",
          colorTextPlaceholder: "rgba(154, 164, 184, 0.5)",
          borderRadius: 12,
          controlHeight: 48,
          fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
        },
        components: {
          Input: {
            activeBorderColor: "#5b8def",
            hoverBorderColor: "rgba(143, 178, 255, 0.6)",
            activeShadow: "0 0 0 3px rgba(91, 141, 239, 0.14)",
            paddingInline: 16,
          },
          Button: {
            primaryShadow: "0 10px 30px -10px rgba(91, 141, 239, 0.85)",
            colorPrimaryHover: "#8fb2ff",
            colorTextLightSolid: "#06070a",
            fontWeight: 500,
          },
          Form: {
            labelColor: "#9aa4b8",
            itemMarginBottom: 20,
            verticalLabelPadding: "0 0 6px",
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
