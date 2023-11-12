import { useState } from "react";
import { Menu, Layout, Image, Flex } from "antd";
import { useNavigate } from "react-router-dom"

import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  
  
function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  
  const items = [
    {
      label: 'Dashboard',
      key: '1',
      icon: <PieChartOutlined  />
    },
    getItem('المستخدمين', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

const Sidebar = (props) => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  const navigate = useNavigate();

  const onClick = (e) =>{
    console.log(e);
    if(e.key === '1'){
      setSelectedMenuItem('1');
      navigate('/');
    } else if (e.key === '2') {
      setSelectedMenuItem('2');
      navigate('/2');
    }
  }

  return (
      <Layout.Sider
          theme={props.colorMode}
          breakpoint="lg"
          collapsedWidth="0"
          style={{
              height:"100vh", 
              position: "fixed"
          }}  
      >
      <Flex justify="center">
          <Image preview={false} height={'100px'} src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
      </Flex>
          <Menu onClick={onClick} theme={props.colorMode} defaultSelectedKeys={[selectedMenuItem]} mode="inline" items={items} />
      </Layout.Sider>
    );
};

export default Sidebar;