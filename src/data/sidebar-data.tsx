import { MenuProps } from "antd";
import { AiFillDashboard, AiOutlineAntDesign, AiOutlineForm } from "react-icons/ai";

export interface MenuItemResp {
    label: string;
    key: string;
    icon: JSX.Element;
}

const resp: MenuItemResp[] = [
    {
        label: "仪表盘",
        key: "/TestDashboard",
        icon: <AiFillDashboard />,
    },
    {
        label: "表单设计",
        key: "/TestFormDesign",
        icon: <AiOutlineForm />,
    },
    {
        label: "模型设计",
        key: "/TestBpmnModel",
        icon: <AiOutlineAntDesign />,
    }
];

export type MenuItem = Required<MenuProps>["items"][number];
const menuItems: MenuItem[] = resp;
const menuItemMap: Map<string, MenuItemResp> = new Map();
resp.forEach((e) => menuItemMap.set(e.key, e));

export { menuItemMap, menuItems };
