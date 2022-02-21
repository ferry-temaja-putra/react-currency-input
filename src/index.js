import React from "react";
import ReactDOM from "react-dom";
import { CCurrencyInput } from "./CCurrencyInput";
import { FCurrencyInput } from "./FCurrencyField";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          <CCurrencyInput
            value={1250.25}
            onValueChanged={(value) =>
              console.log(`Value CCurencyInput: ${value}`)
            }
          />
        </p>
        <p>
          <FCurrencyInput
            value={1550.75}
            onValueChanged={(value) =>
              console.log(`Value FCurencyInput: ${value}`)
            }
          />
        </p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
