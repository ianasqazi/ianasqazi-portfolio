import React from "react";
import { Router } from "react-router-dom";

import history from "./utils/history";

import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Router history={history}>
        <div id="app">
          <Navbar />
        </div>
      </Router>
    </>
  );
}

export default App;
