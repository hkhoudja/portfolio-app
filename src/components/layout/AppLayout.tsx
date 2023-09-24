import { Layout } from "antd";
import styles from "./layout.module.css";
import { SideMenu, HeaderMenu } from "@/components/layout";

const { Content } = Layout;

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <HeaderMenu />
      <Layout>
        <SideMenu />
        <Layout>
          <Content className={styles.content}>{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
