const changeBgButton = document.getElementById("changeBg");
const greeting = document.getElementById("greeting");
const header = document.getElementById("header");

const colors = [
    "#f2f2f2",
    "#3b3b3b"
];

const headerColors = [
    "#ffffff",
    "#3b3b3b"
];

let colorIndex = 0;

changeBgButton.addEventListener("click", function () {
    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    document.body.style.backgroundColor = colors[colorIndex];

    header.style.backgroundColor = headerColors[colorIndex];
});

const now = new Date();
const hour = now.getHours();

if (hour >= 5 && hour < 12) {
    greeting.innerText =
        "Chào buổi sáng! Chúc bạn một ngày học tập thật hiệu quả.";
} else if (hour >= 12 && hour < 18) {
    greeting.innerText =
        "Chào buổi chiều! Chúc bạn có một buổi học thật vui vẻ.";
} else {
    greeting.innerText =
        "Chào buổi tối! Chúc bạn có một buổi tối thật thoải mái.";
}
