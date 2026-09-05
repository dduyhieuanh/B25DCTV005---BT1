const changeBgButton = document.getElementById("changeBg");
const greeting = document.getElementById("greeting");

// Đổi màu nền khi bấm nút
changeBgButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        changeBgButton.innerText = "Đổi sang nền sáng";
    } else {
        changeBgButton.innerText = "Đổi màu nền";
    }
});

// Hiển thị lời chào theo thời gian trong ngày
const now = new Date();
const hour = now.getHours();

if (hour >= 5 && hour < 12) {
    greeting.innerText = "Chào buổi sáng! Chúc bạn một ngày học tập thật hiệu quả.";
} else if (hour >= 12 && hour < 18) {
    greeting.innerText = "Chào buổi chiều! Chúc bạn có một buổi học thật vui vẻ.";
} else {
    greeting.innerText = "Chào buổi tối! Chúc bạn có một buổi tối thật thoải mái.";
}
