import { Card } from "antd";
import React from "react";

import LoginForm from "./LoginForm";
import Logo from "./Logo";

export default function LoginCard({ onLoginAsync }) {
  return (
    <Card className="login-card" cover={<Logo width={400} height={64} />}>
      <LoginForm onLoginAsync={onLoginAsync} />
    </Card>
  );
}
