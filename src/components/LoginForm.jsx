import { Button, Form, Input } from "antd";
import { useState } from "react";

export default function LoginForm({ onLoginAsync }) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleFormSubmit({ username, password }) {
    setIsSubmitting(true);

    try {
      await onLoginAsync({ username, password });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form className="login-form" layout="vertical" onFinish={handleFormSubmit}>
      <Form.Item
        name="username"
        label="Username"
        required={false}
        rules={[{ required: true, message: "" }]}
      >
        <Input
          placeholder="Enter username"
          disabled={isSubmitting}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        required={false}
        rules={[{ required: true, message: "" }]}
      >
        <Input
          type="password"
          placeholder="Enter password"
          disabled={isSubmitting}
        />
      </Form.Item>
      <Button
        className="login-button"
        htmlType="submit"
        type="primary"
        loading={isSubmitting}
      >
        Log In
      </Button>
    </Form>
  );
}
