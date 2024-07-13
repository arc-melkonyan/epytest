import { SDKProvider } from '@telegram-apps/sdk-react';
import App from './App';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

const Root = () => {
  return (
    <SDKProvider>
      <TonConnectUIProvider manifestUrl="https://charming-pegasus-d932d3.netlify.app/tonconnect-manifest.json">
        <App />
      </TonConnectUIProvider>
    </SDKProvider>
  );
};

export default Root;
