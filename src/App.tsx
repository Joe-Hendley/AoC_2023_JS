import InputReader from "./inputReader";
import Sider from "./sidebar";
import type { MenuProps } from "antd";
import { Card, Layout, Menu, theme } from "antd";
import "./App.css";
import React from "react";

const { Header, Content } = Layout;

const years: MenuProps["items"] = ["2021", "2022", "2023"].map((key) => ({
  key,
  label: key,
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Menu theme="dark" mode="horizontal" items={years} />
      </Header>
      <Layout>
        <Sider />
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Card>
            <InputReader />
          </Card>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
