import { Layout, Typography } from 'antd';
import { useMediaQuery } from 'react-responsive'

import { useDirectionMode } from "../contexts/DirectionModeContext";
import { useColorMode } from "../contexts/ColorModeContext";

const darkModeTheme = { primary: '#283747', secondary: "#34495E"};

const Dashboard = () => {
    const { directionMode } = useDirectionMode();
    const { colorMode } = useColorMode();
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const titleStyles = isDesktopOrLaptop ?  {margin:'32px 0 32px 0'} : {margin:'0 0 32px 0'};
    const titleColorStyles = colorMode === 'dark' && { color: 'white' };
    const contentStyles = colorMode === 'dark' && {background: darkModeTheme.secondary, color:'white'}; 

    return (
        <>            
          <Layout.Content style={{ margin: '20px 16px 0'}}>
            <Typography.Title style={{ ...titleStyles, ...titleColorStyles }}>
              {directionMode==='rtl' && "لوحة التحكم"}
              {directionMode==='ltr' && "Dashboard"} 
            </Typography.Title>
            <div style={{ padding: 24, minHeight: '80vh', background:'white', ...contentStyles }}>
              This is the Dashboard Page Content Baaah
            </div>
          </Layout.Content>
        </>
    );
  }

export default Dashboard;