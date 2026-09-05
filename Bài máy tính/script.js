const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let expression = "";

// Khi bấm số: nối số vào màn hình
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        expression += button.innerText;
        display.innerText = expression;
    });
});

// Khi bấm phép toán: nối toán tử vào biểu thức
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (expression === "") {
            return;
        }

        const lastChar = expression[expression.length - 1];

        // Không cho nhập 2 toán tử liên tiếp
        if ("+-*/".includes(lastChar)) {
            return;
        }

        expression += button.innerText;
        display.innerText = expression;
    });
});

// Khi bấm Clear: đưa màn hình về 0
clearButton.addEventListener("click", () => {
    expression = "";
    display.innerText = "0";
});

// Khi bấm =: tính biểu thức
equalsButton.addEventListener("click", () => {
    if (expression === "") {
        return;
    }

    const lastChar = expression[expression.length - 1];

    // Kiểm tra biểu thức không được kết thúc bằng toán tử
    if ("+-*/".includes(lastChar)) {
        display.innerText = "Biểu thức không hợp lệ";
        return;
    }

    try {
        // Chỉ cho phép số và các phép toán + - * /
        if (!/^[0-9+\-*/.\s]+$/.test(expression)) {
            throw new Error("Biểu thức không hợp lệ");
        }

        // Kiểm tra chia cho 0
        if (/\/\s*0+(?:\.0*)?$/.test(expression)) {
            throw new Error("Không thể chia cho 0");
        }

        // Tính toán biểu thức
        const result = Function(`"use strict"; return (${expression})`)();

        if (!Number.isFinite(result)) {
            throw new Error("Kết quả không hợp lệ");
        }

        expression = String(result);
        display.innerText = expression;
    } catch (error) {
        display.innerText = error.message;
        expression = "";
    }
});
