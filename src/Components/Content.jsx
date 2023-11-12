import React from 'react';
import { Layout, Button, Flex } from 'antd';
import { Link } from "react-router-dom"

const Content = () => {
    return( 
        
        <Layout style={{marginRight: 200}} >
          <Layout.Header style={{ padding: 0, background: 'white' }} />
          <Layout.Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, minHeight: 360, background: 'white' }}>content</div>
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Layout.Footer>
        </Layout>
  
    )
}

export default Content;
{/* <Layout.Content
                style={{
                    margin: '24px 16px 0',
                    overflow: 'initial',
                    background: "white  "
                }}
            >
                <div
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
          <div>
        </div>
            <p>long content</p>
            {
              // indicates very long content
              Array.from(     
                {
                  length: 100,
                },
                (_, index) => (
                  <React.Fragment key={index}>
                    {index % 20 === 0 && index ? 'more' : '...'}
                    <br />
                  </React.Fragment>
                ),
              )
            }
          </div>

            </Layout.Content> */}
