import { Layout, ConfigProvider} from "antd";
import { Outlet } from "react-router-dom";
import { DirectionModeProvider, useDirectionMode } from "../contexts/DirectionModeContext";
import { ColorModeProvider  } from "../contexts/ColorModeContext";
import Sidebar from "./Sidebar"

const RootContent = () => {
  const { directionMode } = useDirectionMode();
  return (
    <ColorModeProvider>
      <ConfigProvider direction={directionMode}>
            <Layout hasSider
              style={{
                  minHeight: '100vh',
              }} 
            >
                <Sidebar/>
                <Outlet context={directionMode}/>
            </Layout>
        </ConfigProvider>
      </ColorModeProvider>
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