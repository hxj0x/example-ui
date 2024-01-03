import { useTheme } from "@/context/theme-provider.tsx";
import { App as AntdApp, ConfigProvider, theme as antdTheme } from "antd";
import dayjs from "dayjs";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";

dayjs.locale("zh-cn");

const {useToken} = antdTheme;

export default function App() {

    const {token} = useToken();
    console.log(token.colorSplit);
    const {theme: currentTheme} = useTheme();
    console.log(currentTheme);
    // console.log(token.Layout?.lightSiderBg);
    // console.log("itemBg =>:" + JSON.stringify(token));
    const headerBg = currentTheme === "dark" ? "#141414" : "#fff";

    return (
        <ConfigProvider
            theme={{
                cssVar: true,
                hashed: false,
                algorithm: [currentTheme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm],
                components: {
                    Layout: {
                        headerHeight: 48,
                        headerPadding: "0 20px",
                        headerBg: headerBg,
                    },
                    /*no work when inner sider*/
                    // Menu: {
                    //     collapsedWidth: 60
                    // },
                    // TODO 貌似都不生效
                    Tabs: {
                        // itemColor: "#dc0f0f",
                        // itemActiveColor: "#dc0f0f",
                        // itemHoverColor: "#dc0f0f",
                        // cardBg: "#dc0f0f"
                    },
                },
            }}
        >
            <AntdApp component={false}>
                {/*https://github.com/ant-design/cssinjs/issues/96*/}
                {/*<StyleProvider hashPriority="high" transformers={[legacyLogicalPropertiesTransformer>*/}
                {/* <StyleProvider hashPriority="high"> */}
                    <RouterProvider router={router} />
                {/* </StyleProvider> */}
            </AntdApp>
        </ConfigProvider>
    )
}