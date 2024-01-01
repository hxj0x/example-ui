import { menuItemMap } from "@/data/sidebar-data.tsx";
import { TabPaneProps, Tabs, TabsProps } from "antd";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Tab extends Omit<TabPaneProps, "tab"> {
    key: string;
    label: React.ReactNode;
}

export const RouteTabs: FC<{ onTabRemove?: (tabKey: string) => void }> = ({ onTabRemove }) => {

    const location = useLocation();

    const navigate = useNavigate();
    const [activeKey, setActiveKey] = useState<string>();

    const [tabList, setTabList] = useState<Tab[]>([]);

    useEffect(() => {
        setActiveKey(location.pathname);
        if (tabList.find((e) => e.key === location.pathname) != undefined) {
            return;
        }

        // ts lsp 更新不及时导致类型报错
        const menuItem = menuItemMap.get(location.pathname);

        if (menuItem != undefined) {
            setTabList((e) => [
                ...e,
                {
                    key: menuItem.key,
                    label: (
                        <span className="flex items-center gap-2">
                            {menuItem.icon} {menuItem.label}
                        </span>
                    ),
                },
            ]);
        }
    }, [location.pathname, tabList]);

    return (
        <div>
            <Tabs
                onEdit={(targetKey, action) => {
                    if (action === "remove" && tabList.length > 1) {
                        if (onTabRemove) onTabRemove(targetKey as string);
                        let newTabIndex = tabList.length - 1;
                        if (activeKey === targetKey) {
                            tabList.forEach((t, i) => {
                                if (t.key === activeKey) {
                                    newTabIndex = i == tabList.length - 1 ? i - 1 : i + 1;
                                }
                            });
                            navigate(tabList[newTabIndex].key, { replace: true });
                        }
                        setTabList(tabList.filter((e) => e.key !== targetKey));
                    }
                }}
                items={tabList}
                activeKey={location.pathname}
                // tabBarExtraContent={{ right: <AiOutlineApple /> }}
                size={"small"}
                // 没有bg-background会导致内容滚动发生遮盖
                className="bg-background px-2"
                type="editable-card"
                hideAdd
                tabBarGutter={6}
                tabBarStyle={{
                    height: "2rem",
                    marginTop: "0.25rem",
                    marginLeft: "0.25rem",
                    marginBottom: "0rem",
                }}
                onChange={(activeKey) => {
                    // setActiveKey(activeKey);
                    navigate(activeKey);
                }}
                renderTabBar={renderTabBar}
            />
        </div>
    );
};

const renderTabBar: TabsProps["renderTabBar"] = (tabBarProps, DefaultTabBar) => {
    return (
        <DefaultTabBar {...tabBarProps}>
            {(node) => {
                return (
                    <>
                        {/* <div className="flex justify-center px-2 mx-2 my-1">{node}</div> */}
                        {node}
                    </>
                );
            }}
        </DefaultTabBar>
    );
};
