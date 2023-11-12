import React, {useEffect} from 'react';
import { Layout } from 'antd';
import { useOutletContext } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const LayoutContent = () => {
  return (
      <>
        <Layout.Header style={{ padding: 0, background: 'white' }} />
        <Layout.Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: 'white' }}>content</div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Layout.Footer>
      </>
  );
}

const Content = () => {
  const directionMode = useOutletContext();
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