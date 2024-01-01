import { useSidebarStore } from "@/store/sidebar-store.ts";
import { menuItems } from "@/data/sidebar-data.tsx";
import { Button, Layout, Menu, theme as antdTheme } from "antd";
import { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useNavigate, useOutlet } from "react-router-dom";
import { RxMoon, RxSun } from "react-icons/rx";
import { useTheme } from "@/context/theme-provider.tsx";

const {Header, Sider, Content} = Layout;

const {useToken} = antdTheme;


export const AdminLayout = () => {
    const navigate = useNavigate();
    const {collapsed, setCollapsed} = useSidebarStore();
    const [activeKey, setActiveKey] = useState<string>();
    const outlet = useOutlet();

    useEffect(() => {
        setActiveKey(location.pathname);
    }, [location.pathname]);

    const {token} = useToken();

    return (
        <>
            <Layout className="h-full">
                {/* border-b border-slate-900/10 bg-white dark:border-slate-600/60 dark:bg-black*/}
                <Header
                    style={{borderBottom: `1px solid ${token.colorSplit}`}}
                    className="flex justify-between border-b-1">
                    <div className="left flex flex-shrink-0 items-center">
                        <Link
                            className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent hover:cursor-pointer hover:text-cyan-600"
                            to={"/"}
                        >
                            后台管理系统
                        </Link>
                    </div>
                    <div className="flex items-center">
                    </div>
                    <div className="right flex items-center justify-center gap-1">
                        <ThemeSwitcher />
                        <Button className="inline-flex items-center justify-center" type="text"
                                icon={<AiOutlineUser className="text-[1.25rem]" />} />
                    </div>
                </Header>
                <Layout hasSider>
                    <Sider
                        theme="light"
                        collapsible
                        collapsed={collapsed}
                        onCollapse={(value) => setCollapsed(value)}
                    >
                        <Menu
                            className="h-full"
                            // defaultSelectedKeys={[activeKey || "/"]}
                            // activeKey={activeKey}
                            selectedKeys={[activeKey || "/"]}
                            mode="inline"
                            items={menuItems}
                            onClick={(info) => {
                                if (location.pathname !== info.key) {
                                    console.log("sidebar do nav");
                                    navigate(info.key);
                                }
                            }}
                        />
                    </Sider>
                    <Content>
                        {outlet}
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
    return (
        <>
            <Button
                className="inline-flex items-center justify-center"
                type="text"
                icon={
                    theme === "light" ? (
                        <RxSun className="text-[1.125rem]" />
                    ) : (
                        <RxMoon className="text-[1.125rem]" />
                    )}
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                }}
            />
        </>
    );
};

