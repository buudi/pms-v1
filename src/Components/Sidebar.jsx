import { useState } from "react";
import { useDirectionMode } from "../contexts/DirectionModeContext";
import { useColorMode } from "../contexts/ColorModeContext";
import { Menu, Layout, Image, Flex } from "antd";
import { useNavigate } from "react-router-dom"

import {
    DesktopOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
  
  
function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const arabicItems = [
    {
      label: 'Content Page',
      key: '1',
      icon: <PieChartOutlined  />
    },
    getItem('المستخدمين', '2', <DesktopOutlined />),
    getItem('تغيير اللون', '3'),
    getItem('تغيير اللغة', '9'),

  ];
  
  const englishItems = [
    {
      label: 'Content Page',
      key: '1',
      icon: <PieChartOutlined  />
    },
    getItem('Users', '2', <DesktopOutlined />),
    getItem('Switch Color Mode', '3'),
    getItem('Switch Language', '9'),

  ];

const Sidebar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  const { directionMode, toggleDirectionMode } = useDirectionMode();
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    setSelectedMenuItem(e);
    // console.log(e);
    const routeMap = {
      '1': '/',
      '2': '/2',
      '3': toggleColorMode,
      '9': toggleDirectionMode,
    };
    const route = routeMap[e.key];
    if (route) {
      if (typeof route === 'function') {
        route(); // Call the function here
      } else {
        navigate(route);
      }
  }
  };

  const menuItems = directionMode === 'rtl' ? arabicItems : englishItems;

  return (
      <Layout.Sider
          theme={colorMode}
          breakpoint="lg"
          collapsedWidth="0"
          style={{
              // overflow: 'auto',
              height:"100vh", 
              position: "fixed",
          }}  
      >
      <Flex justify="center">
          <Image preview={false} height={'100px'} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
      </Flex>
          <Menu onClick={handleMenuClick} theme={colorMode} defaultSelectedKeys={[selectedMenuItem]} mode="inline" items={menuItems} />          
      </Layout.Sider>
    );
};

export default Sidebar;