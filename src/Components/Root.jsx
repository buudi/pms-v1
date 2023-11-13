import { useState } from "react";
import { Layout, ConfigProvider} from "antd";
import { Outlet } from "react-router-dom";
import { DirectionModeProvider, useDirectionMode } from "../contexts/DirectionModeContext";
import Sidebar from "./Sidebar"

const RootContent = () => {
  const [colorMode, setColorMode] = useState("light");
  const { directionMode } = useDirectionMode();

  return (
    <ConfigProvider direction={directionMode}>
          <Layout hasSider
            style={{
                minHeight: '100vh',
            }} 
          >
              <Sidebar colorMode={colorMode}/>
              <Outlet context={directionMode}/>
          </Layout>
      </ConfigProvider>
  );
}

const Root = () => {
  return (
    <DirectionModeProvider>
      <RootContent />
    </DirectionModeProvider>
  );
}

export default Root;