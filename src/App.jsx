import { Layout } from "antd";

import LoginCard from "./components/LoginCard";
import { wait } from "./libs/promises";

export default function App() {
  async function handleLogin({ username, password }) {
    await wait(2000, { username, password });
  }

  return (
    <Layout className="app-container">
      <LoginCard onLoginAsync={handleLogin} />
    </Layout>
  );
}
