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

  if (isDesktopOrLaptop && directionMode === 'rtl'){
    return (
      <Layout style={{marginRight: 200}} >
        <LayoutContent />
      </Layout>
    )
  } else if (isDesktopOrLaptop && directionMode === 'ltr') {
      return (
        <Layout style={{marginLeft: 200}} >
          <LayoutContent />
        </Layout>
      )
  } else {
    return (
        <Layout>
          <LayoutContent />
        </Layout>
    )
  }
}

export default Content;