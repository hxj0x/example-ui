import { useSidebarStore } from "@/store/sidebar-store.ts";
import { Button, Layout, theme as antdTheme } from "antd";
import { FC } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UserAvatar } from "./UserAvatar";
import ThemeSwitcher from "./ThemeSwitcher";

const {Header} = Layout;

const {useToken} = antdTheme;

export const PageHeader: FC = () => {
    const {toggleCollapsed} = useSidebarStore();
    const {token} = useToken();
    return (
        <Header
            style={{borderBottom: `1px solid ${token.colorSplit}`}}
            className="flex justify-between border-b-1 items-center">
            {/*<div
                className="flex justify-between gap-10 border-b border-slate-900/10 py-2 pl-5 pr-5 dark:border-slate-300/10">*/}
            <div className="left flex flex-shrink-0 items-center">
                <Button
                    children={<AiOutlineMenu className="text-[1.25rem]" />}
                    type="text"
                    onClick={() => toggleCollapsed()}
                />
                <Link
                    to={"/"}
                    className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent hover:cursor-pointer"
                >
                    工作流管理系统
                </Link>
            </div>
            <div className="center "></div>
            <div className="right flex items-center justify-center gap-2">
                <ThemeSwitcher />
                {/*<Button
                    className="inline-flex items-center justify-center"
                    type="text"
                    icon={
                        <Badge count={5} size="small">
                            <AiOutlineBell className="text-[1.25rem]" />
                        </Badge>
                    }
                />*/}
                <UserAvatar />
            </div>
            {/*</div>*/}
        </Header>

    );
};
