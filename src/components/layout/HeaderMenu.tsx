import { Avatar, Button, Dropdown, Layout, Space } from "antd";
import type { MenuProps } from "antd";
import styles from "./layout.module.css";
import { Logo } from "../Logo";

const { Header } = Layout;

const items: MenuProps["items"] = [
  {
    key: "logout",
    label: "Logout",
    onClick: () => alert("Please don't go!"),
  },
];

export function HeaderMenu() {
  return (
    <Header className={styles.header}>
      <Logo />
      <Dropdown menu={{ items }}>
        <Button
          type="text"
          style={{ fontSize: 14, padding: 4, height: "100%" }}
        >
          <Space size={"small"}>
            <Avatar>U</Avatar>
            Username
          </Space>
        </Button>
      </Dropdown>
    </Header>
  );
}
