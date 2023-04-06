// import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from 'antd';
import App from "./app/app";
import './assets/css/reset.css';
import './assets/css/index.css';
import homepage from '../theme'
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: homepage.primary,
          },
          components: {
            Menu: {
              colorPrimary: homepage.title
            }
          }
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  // </StrictMode>
);
