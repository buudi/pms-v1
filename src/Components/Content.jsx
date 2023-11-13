import React from 'react';
import { Layout, Typography } from 'antd';
import { useDirectionMode } from "../contexts/DirectionModeContext";
import { useColorMode } from "../contexts/ColorModeContext";
import { useMediaQuery } from 'react-responsive'

const darkModeTheme = { primary: '#283747', secondary: "#34495E"};

const LayoutContent = ({ directionMode, isDesktopOrLaptop, colorMode }) => {

  

  const titleStyles = isDesktopOrLaptop ?  {margin:'32px 0 32px 0'} : {margin:'0 0 32px 0'};
  const titleColorStyles = colorMode === 'dark' && { color: 'white' };
  const contentStyles = colorMode === 'dark' && {background: darkModeTheme.secondary, color:'white'}; 
  const footerStyles = colorMode === 'dark'&& {background:'#12161C', color:'white'};
  return (
      <>
        {/* <Layout.Header style={{ padding:0, background: 'white' }} >
          
        </Layout.Header> */}
        <Layout.Content style={{ margin: '20px 16px 0'}}>
        <Typography.Title style={{ ...titleStyles, ...titleColorStyles }}>
            {directionMode==='rtl' && "عنوان الصفحة"}
            {directionMode==='ltr' && "Page Title"} 
          </Typography.Title>
          <div style={{ padding: 24, minHeight: '80vh', background:'white', ...contentStyles }}>content <br /> content <br /> content</div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center', ...footerStyles }}>
        {directionMode==='rtl' && "نظام ادارة العقارات, الجزيرة العربية للعقارات ©2023"}
        {directionMode==='ltr' && "Property Management System, Aljazeera Alarabia Real ©2023 "}

        </Layout.Footer>
      </>
  );
}

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
  return (
    <Layout style={{ ...themeStyle, ...layoutStyle}}>
      <LayoutContent directionMode={directionMode} isDesktopOrLaptop={isDesktopOrLaptop} colorMode={colorMode} />
    </Layout>
  );

}

export default Content;