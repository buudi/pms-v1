import { Flex } from 'antd';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Flex justify='center' align='center' style={{ width:'100%' }}>
      <div style={{textAlign:'center'}}>
         <h1>Oops! 404</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </Flex>
  );
}