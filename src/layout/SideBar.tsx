import { useSidebarStore } from "@/store/sidebar-store.ts";
import { menuItems } from "@/data/sidebar-data.tsx";
import { Layout, Menu } from "antd";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const {Sider} = Layout;
export const SideBar: FC = () => {
    const {collapsed} = useSidebarStore();
    const navigate = useNavigate();

    const location = useLocation();
    const [activeKey, setActiveKey] = useState<string>();

    useEffect(() => {
        setActiveKey(location.pathname);
    }, [location.pathname]);

    return (
        <Sider
            theme="light"
            collapsed={collapsed}
            className="sticky top-0"
        >
            <Menu
                selectedKeys={[activeKey || "/"]}
                className="h-full  overflow-y-auto"
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
    );
};
