import ReactDOM from 'react-dom/client';
import App from './App';
import { SDKProvider } from '@telegram-apps/sdk-react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SDKProvider acceptCustomStyles debug>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SDKProvider>,
);
