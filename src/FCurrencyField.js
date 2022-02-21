import React, { useEffect, useState } from "react";
import { formatCurrency, parseCurrency } from "./currencyHelper";

export function FCurrencyInput(props) {
  const [value, setValue] = useState(0);
  const [displayValue, setDisplayValue] = useState(formatCurrency(0));

  useEffect(() => {
    if (!props.value) return;
    setValue(props.value);
    setDisplayValue(formatCurrency(props.value));
  }, [props.value]);

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
          width: displayValue.length + "ch"
        }}
        value={displayValue}
        onFocus={(e) => {
          if (e.currentTarget === e.target) {
            e.target.select();
          }
        }}
        onBlur={(e) => {
          setDisplayValue(formatCurrency(value));
        }}
        onChange={(e) => {
          let inputValue = e.target.value;
          if (inputValue === "") inputValue = "0";
          const parsedValue = parseCurrency(inputValue);
          if (!isNaN(parsedValue)) {
            setValue(parsedValue);
            if (props.onValueChanged) {
              props.onValueChanged(parsedValue);
            }
          }
          setDisplayValue(inputValue);
        }}
      />
    </div>
  );
}
