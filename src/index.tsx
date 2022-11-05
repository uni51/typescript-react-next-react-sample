import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
// import Hello from "./components/Hello";
// import Parent from "./components/ContainerSample";
// import CounterState from "./components/CounterState";
// import CounterReducer from "./components/CounterReducer";
// import Parent from "./components/MemoSample2";
// import Parent from "./components/UseCallbackSample";
// import { UseMemoSample } from "./components/UseMemoSample";
// import Clock from "./components/Clock";
// import Parent from "./components/UseContextSample";
// import ImageUploader from "./components/UseRefSample";
// import Parent from "./components/UseImperativeHandleSample";
import { Input } from "./components/UseDebugValueSample";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Parent /> */}
    {/* <CounterState initialValue={0} /> */}
    {/* <CounterReducer initialValue={0} /> */}
    {/* <UseMemoSample /> */}
    {/* <Clock /> */}
    {/* <ImageUploader /> */}
    <Input />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
