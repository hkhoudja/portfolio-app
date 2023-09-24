import { Layout, Menu, MenuProps } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key?: React.Key): MenuItem {
  return { key, label } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href={"/"}>Home</Link>, "menu-home"),
  getItem(<Link href={"/projects"}>Projects</Link>, "menu-projects"),
  getItem(<Link href={"/portfolio"}>Portfolio</Link>, "menu-portfolio"),
];

export function SideMenu() {
  const router = useRouter();

  const getActivePath = () => {
    let pathname = router.pathname.replace("/", "");

    if (pathname === "") {
      return "menu-home";
    }

    return `menu-${pathname}`;
  };

  console.log({ router });
  return (
    <Sider style={{ background: "#fff", minHeight: "calc(100vh - 65px)" }}>
      <Menu
        theme="light"
        items={items}
        defaultSelectedKeys={[getActivePath()]}
      />
    </Sider>
  );
}
