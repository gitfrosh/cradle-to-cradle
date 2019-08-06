import React from "react";
import "./App.css";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step4 from "./Step4";
import Step3 from "./Step3";

function App() {
  function getStep() {
    switch (count) {
      case 0:
        return <Step0 />;

      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
        case 3:
          return <Step3 />;
          case 4:
            return <Step4 />;
      default:
      // code block
    }
  }
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <section id="nav" class="section">
        <div id="nav-buttons">
          <button
            onClick={() => setCount(prevCount => prevCount - 1)}
            class="circular ui icon button"
          >
            <i class="icon angle left" />
          </button>
          <button
            onClick={() => setCount(prevCount => prevCount + 1)}
            class="circular ui icon button"
          >
            <i class="icon angle right" />
          </button>
        </div>{" "}
      </section>
      {getStep(count)}

      <section id="footer" class="section">
        <p>Cradle2Cradle</p>
      </section>
    </div>
  );
}

export default App;
