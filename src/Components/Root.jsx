import { useState } from "react";
import { Layout, ConfigProvider} from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
import Content from "./Content";


const Root = () => {
    const [colorMode, setColorMode] = useState("light");
  return (
    <ConfigProvider direction="rtl">
      <Layout
      style={{
        minHeight: '100vh',
      }} 
    >
      <Sidebar colorMode={colorMode} />
        <Outlet />
    </Layout>
    </ConfigProvider>
  );
}

export default Root;