import { useThirdweb } from "@thirdweb-dev/react";
 
  const HelloWorld = () => {
    const { account, chainId } = useThirdweb();
 
    return (
      <div>
        <h1>Hello World</h1>

        <p>Account: {account}</p>
        <p>ChainId: {chainId}</p>
      </div>
    );
  };
 
  export default HelloWorld;

