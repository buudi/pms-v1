import { useState } from "react";
import { useDirectionMode } from "../contexts/DirectionModeContext";
import { useColorMode } from "../contexts/ColorModeContext";
import { Menu, Layout, Image, Flex, Switch } from "antd";
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
      label: 'لوحة التحكم',
      key: '1',
      icon: <PieChartOutlined  />
    },
    getItem('المستخدمون', '2', <DesktopOutlined />),
    getItem('تغيير اللون', '3'),
    getItem('تغيير اللغة', '9'),

  ];
  
  const englishItems = [
    {
      label: 'Dashboard',
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
    
    // console.log(e);
    const routeMap = {
      '1': '/',
      '2': '/users',
      '3': toggleColorMode,
      '9': toggleDirectionMode,
    };
    const route = routeMap[e.key];
    if (route) {
      if (typeof route === 'function') {
        route(); // Call the function here
      } else {
        setSelectedMenuItem(e.key);
        console.log(e.key);
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
        <Menu style={{marginTop: '10px'}} onClick={handleMenuClick} theme={colorMode} selectedKeys={[selectedMenuItem]} defaultSelectedKeys={[selectedMenuItem]} mode="inline" items={menuItems} />
        <Switch checkedChildren="Dark Mode" unCheckedChildren="Toggle Dark" onChange={toggleColorMode} />
        <Switch style={{marginTop:"10px"}} checkedChildren="LTR" unCheckedChildren="Toggle LTR (English)" onChange={toggleDirectionMode} />         

    </Layout.Sider>
    );
};

export default Sidebar;