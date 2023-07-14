import React from "react";
//# 從 "react-dom" 中引入 createRoot，這種方式已不再支援。
//# 相反，你應該從 "react-dom/client" 中引入它
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//@  React 18  ReactDOM.render 方法不再被支援 ，改用 createRoot 方法
const rootElement = document.getElementById('root');

// 使用 createRoot 方法來渲染應用程式的根元件
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);