import React from 'react';
import { Layout } from 'antd';

const Content2 = () => {
    return(
        <Layout>
            <Layout.Header
            
                style={{
                    height: '5vh',
                    padding: 0,
                    background: "white"
                }}
            />

            <Layout.Content
                style={{
                    margin: '24px 16px 0',
                    overflow: 'initial',
                }}
            >
                <div
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <p>Content 2</p>
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

            </Layout.Content>

        
        </Layout>
    )
}

export default Content2;