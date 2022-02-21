import React from "react";
import { formatCurrency, parseCurrency } from "./currencyHelper";

export class CCurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      displayValue: formatCurrency(props.value)
    };
  }

  render() {
    return (
      <div
        style={{
          width: "50%",
          textAlign: "right",
          borderStyle: "solid",
          borderTop: "none",
          borderRight: "none",
          borderLeft: "none",
          fontSize: "2em"
        }}
      >
        <input
          style={{
            fontSize: "1em",
            borderStyle: "none",
            outline: "none",
            width: this.state.displayValue.length + "ch"
          }}
          value={this.state.displayValue}
          onFocus={(e) => {
            if (e.currentTarget === e.target) {
              e.target.select();
            }
          }}
          onBlur={(e) => {
            this.setState({
              displayValue: formatCurrency(this.state.value)
            });
          }}
          onChange={(e) => {
            let value = e.target.value;
            if (value === "") value = "0";
            const parsedValue = parseCurrency(value);
            if (!isNaN(parsedValue)) {
              this.setState({ value: parsedValue });
              if (this.props.onValueChanged) {
                this.props.onValueChanged(parsedValue);
              }
            }
            this.setState({ displayValue: value });
          }}
        />
      </div>
    );
  }
}
