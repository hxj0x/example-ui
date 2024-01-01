import { useTheme } from "@/context/theme-provider.tsx";
import { Button } from "antd";
import { RxMoon, RxSun } from "react-icons/rx";
import React from "react";

const ThemeSwitcher: React.FC = () => {
    const {theme, setTheme} = useTheme();
    return (
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
    );
};

export default ThemeSwitcher;