import { MenuProps } from "antd";
import { create } from "zustand";

type MenuItem = Required<MenuProps>["items"][number];

interface SidebarStore {
    collapsed?: boolean;
    menuItemMap: Map<string, MenuItem>;
    setMenuItemMap: (values: Map<string, MenuItem>) => void;
    setCollapsed: (collapsed: boolean) => void;
    toggleCollapsed: () => void;
}

export const useSidebarStore = create<SidebarStore>((set) => {
    return {
        collapsed: false,
        menuItemMap: new Map(),
        // set 会自动合并不变的值，所以可以省点代码
        setCollapsed: (collapsed) => set({collapsed: collapsed}),
        setMenuItemMap: (values) => set({menuItemMap: values}),
        toggleCollapsed: () => {
            return set((state) => {
                return {
                    ...state,
                    collapsed: !state.collapsed,
                };
            });
        },
    };
});

