import React from "react";
import "./App.css";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step4 from "./Step4";
import Step3 from "./Step3";
import Step5 from "./Step5";
import Step6 from "./Step6";

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
        case 5:
          return <Step5 />;
          case 6:
            return <Step6 />;
      default:
      // code block
    }
  }
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <section id="nav" className="section">
        <div id="nav-buttons">
          <button
            disabled={count !== 0 ? false : true}
            onClick={() => setCount(prevCount => prevCount - 1)}
            className="ui green massive circular ui icon button"
          >
            <i className="icon angle left" />
          </button>{" "}
          <button
            disabled={count !== 6 ? false : true}
            onClick={() => setCount(prevCount => prevCount + 1)}
            className="ui green massive circular ui icon button"
          >
            <i className="icon angle right" />
          </button>
        </div>{" "}
      </section>
      {getStep(count)}

      <section id="footer" className="section">
        <em>What is the Cradle-to-Cradle philosophy?</em> Made by{" "}
        <a href="https://rike.dev">rike.dev</a>.{" "}
      </section>
    </div>
  );
}

export default App;
