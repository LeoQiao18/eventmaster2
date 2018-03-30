import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const AppContent = ({ children }) => {
  return (
    <Content
      style={{
        margin: "24px 16px 0",
        height: "calc(100vh - 64px - 69px - 24px)"
      }}
    >
      <div
        style={{
          padding: 24,
          background: "#fff",
          height: "100%",
          overflowY: "scroll"
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default AppContent;
