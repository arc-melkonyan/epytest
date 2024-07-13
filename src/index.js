import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserNavigator, SDKProvider } from '@telegram-apps/sdk-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SDKProvider acceptCustomStyles debug>
    <BrowserNavigator>
      <App />
    </BrowserNavigator>
  </SDKProvider>,
);
