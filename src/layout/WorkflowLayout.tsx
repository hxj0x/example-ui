import React, { Suspense, useRef, useState } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { PageHeader } from "./PageHeader";
import { RouteTabs } from "./RouteTabs";
import { SideBar } from "./SideBar";
import { Layout, theme } from "antd";

const {Content} = Layout;

const {useToken} = theme;

const WorkflowLayout: React.FC = () => {
    const {token} = useToken();
    const outlet = useOutlet();
    const location = useLocation();
    const [, forceUpdate] = useState({});

    const path2Outlet = useRef<
        Map<string, React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>>
    >(new Map());

    if (outlet != null) {
        path2Outlet.current.set(location.pathname, outlet);
    }

    const outlets: React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>>[] = [];

    const handleTabRemove = (tabKey: string) => {
        path2Outlet.current.delete(tabKey);
        forceUpdate({});
    };

    for (const [key, value] of path2Outlet.current) {
        outlets.push(
            <div key={key} className={`max-w-max ${key !== location.pathname ? "hidden" : ""}`}>
                {value}
            </div>,
        );
    }

    console.log("WorkflowLayout render");
    console.log(outlets.length);

    return (
        <Layout className="h-full">
            <PageHeader />
            <Layout hasSider className="overflow-auto">
                <SideBar />
                <Content className="overflow-x-hidden" style={{color: token.colorText}}>
                    <div className="sticky top-0 z-10"
                         style={{
                             backgroundColor: token.colorBgLayout,
                             borderBottom: `1px solid ${token.colorSplit}`
                         }}>
                        <RouteTabs onTabRemove={handleTabRemove} />
                    </div>
                    <div className="mx-6 mt-2">
                        <Suspense fallback={<h1>Loading</h1>}>
                        {outlet}
                        </Suspense>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default WorkflowLayout;
