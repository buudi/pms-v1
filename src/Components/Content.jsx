import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { useDirectionMode } from "../contexts/DirectionModeContext";
import { useColorMode } from "../contexts/ColorModeContext";
import { useMediaQuery } from 'react-responsive'

const darkModeTheme = { primary: '#283747', secondary: "#34495E"};

const Content = () => {
  const { directionMode } = useDirectionMode();
  const { colorMode } = useColorMode();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  });
  let layoutStyle = {};

  switch (true) {
    case isDesktopOrLaptop && directionMode === 'rtl':
      layoutStyle = { marginRight: 200 };
      break;
    case isDesktopOrLaptop && directionMode === 'ltr':
      layoutStyle = { marginLeft: 200 };
      break;
    default:
      layoutStyle = {};
  }

  const themeStyle = colorMode === 'light' ? { background:"#F8F9F9" } : { background: darkModeTheme.primary };
  const footerStyles = colorMode === 'dark'&& {background:'#12161C', color:'white'};

  return (
    <Layout style={{ ...themeStyle, ...layoutStyle}}>
       <Outlet />
       <Layout.Footer style={{ textAlign: 'center', ...footerStyles }}>
          {directionMode==='rtl' && "نظام ادارة العقارات, الجزيرة العربية للعقارات ©2023"}
          {directionMode==='ltr' && "Property Management System, Aljazeera Alarabia Real Estate ©2023 "}
        </Layout.Footer>
    </Layout>
  );

}

export default Content;