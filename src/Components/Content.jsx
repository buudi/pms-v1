import React from 'react';
import { Layout, Typography } from 'antd';
import { useDirectionMode } from "../contexts/DirectionModeContext";
import { useMediaQuery } from 'react-responsive'

const LayoutContent = () => {
  return (
      <>
        <Layout.Header style={{padding:0, background: 'white' }} >
          <Typography.Title>
            Page Title
          </Typography.Title>
        </Layout.Header>
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 'auto', background: 'white' }}>content <br /> content <br /> content</div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Layout.Footer>
      </>
  );
}

const Content = () => {
  const { directionMode } = useDirectionMode();
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

  return (
    <Layout style={layoutStyle}>
      <LayoutContent />
    </Layout>
  );

}

export default Content;