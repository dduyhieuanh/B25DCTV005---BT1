import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
  const [expression, setExpression] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setExpression("");
      return;
    }

    if (value === "Delete") {
      setExpression((prev) => prev.slice(0, -1));
      return;
    }

    if (value === "=") {
      try {
        const result = Function(
          `"use strict"; return (${expression})`
        )();

        setExpression(String(result));
      } catch {
        setExpression("Error");
      }

      return;
    }

    if (expression === "Error") {
      setExpression(value);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const buttons = [
    { label: "C", color: "#e53935" },
    { label: "Delete", color: "#e53935" },
    { label: "/", color: "#4caf50" },

    { label: "7", color: "#4caf50" },
    { label: "8", color: "#4caf50" },
    { label: "9", color: "#4caf50" },
    { label: "*", color: "#4caf50" },

    { label: "4", color: "#4caf50" },
    { label: "5", color: "#4caf50" },
    { label: "6", color: "#4caf50" },
    { label: "-", color: "#4caf50" },

    { label: "1", color: "#4caf50" },
    { label: "2", color: "#4caf50" },
    { label: "3", color: "#4caf50" },
    { label: "+", color: "#4caf50" },

    { label: "0", color: "#4caf50" },
    { label: "=", color: "#4caf50" },
  ];

  return (
    <div className="calculator">

      <h2>Virtual Calculator</h2>

      <Display value={expression} />

      <div className="button-grid">
        {buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            color={button.color}
            onClick={handleClick}
          />
        ))}
      </div>

    </div>
  );
}

export default Calculator;