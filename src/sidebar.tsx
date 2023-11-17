import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React from "react";

const { Sider } = Layout;

const Sidebar: React.FC = () => (
  <Sider width={200}>
    <Menu
      mode="inline"
      items={puzzles}
      style={{ height: "100%", borderRight: 0 }}
    />
  </Sider>
);

const range = (x: number, y: number): number[] => {
  const nums = [];
  let current, limit: number;
  if (x < y) {
    current = x;
    limit = y;
  } else {
    current = y;
    limit = x;
  }

  while (current <= limit) {
    nums.push(current);
    current++;
  }

  return nums;
};

const puzzles: MenuProps["items"] = range(1, 25).map((key) => ({
  key,
  label: String(key),
}));

export default Sidebar;
