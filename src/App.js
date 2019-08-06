import React from "react";
import "./App.css";
import Step1 from "./Step1";
function App() {
  return (
    <div>
      <section id="nav" class="section">
        <div id="nav-buttons">
          <button class="circular ui icon button">
            <i class="icon angle left" />
          </button>
          <button class="circular ui icon button">
            <i class="icon angle right" />
          </button>
        </div>
      </section>
      <Step1 />
      <section id="footer" class="section">
        <p>Cradle2Cradle</p>
      </section>
    </div>
  );
}

export default App;
