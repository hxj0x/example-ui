import avatar from "@/assets/images/avatar.png";
import { Avatar, Button, Dropdown, MenuProps } from "antd";

export const UserAvatar = () => {
    const items: MenuProps["items"] = [
        {
            key: "1",
            label: <span className="dropdown-item">个人信息</span>,
            // onClick: () => infoRef.current!.showModal({ name: 11 })
        },
        {
            key: "2",
            label: <span className="dropdown-item">修改密码</span>,
            // onClick: () => passRef.current!.showModal({ name: 11 })
        },
        {
            type: "divider",
        },
        {
            key: "3",
            label: <span className="dropdown-item">退出登录</span>,
            // onClick: logout
        },
    ];

    return (
        <Button type="text" className="inline-flex items-center">
            <Dropdown menu={{ items }}>
                {/* <Dropdown overlay={menu} placement="bottom" arrow> */}
                <Avatar src={avatar} size={"default"} />
                {/* </Dropdown> */}
            </Dropdown>
        </Button>
    );
};
