import { useState } from "react";
import { Layout, ConfigProvider} from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"

const Root = () => {
  const [colorMode, setColorMode] = useState("light");
  const [directionMode, setDirectionMode] = useState("rtl");
  return (
    <ConfigProvider direction={directionMode}>
        <Layout hasSider
          style={{
              minHeight: '100vh',
          }} 
        >
            <Sidebar colorMode={colorMode} directionMode={[directionMode, setDirectionMode]} />
            <Outlet context={directionMode}/>
        </Layout>
    </ConfigProvider>
  );
}

export default Root;