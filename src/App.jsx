import React from "react";
import "./App.css";
import Layout from "./Layout";
import Preloader from "./components/preloader/Preloader";
import Cursor from "./components/cursor/Cursor";

function App() {
  return (
    <>
      <Preloader />
      <Cursor />
      <Layout />
    </>
  );
}

export default App;
