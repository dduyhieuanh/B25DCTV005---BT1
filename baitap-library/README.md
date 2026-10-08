# So sánh phát triển giao diện bằng Vanilla JavaScript và ReactJS

## 1. Quản lý trạng thái (State Management)
- **Vanilla JS**: Trạng thái dữ liệu (danh sách sách, danh sách yêu thích) nằm rải rác hoặc lưu trong các biến toàn cục. Mỗi khi dữ liệu thay đổi, lập trình viên phải tự gọi các hàm thao tác DOM thủ công (`renderBooks()`, `innerHTML = ''`, `appendChild()`) để cập nhật UI.
- **React**: Trạng thái được quản lý tập trung thông qua `useState`. Khi state thay đổi, React tự động so sánh (Reconciliation) và cập nhật lại giao diện (Re-render) một cách tối ưu mà không cần can thiệp trực tiếp vào DOM.

## 2. Cấu trúc mã nguồn và Khả năng tái sử dụng (Architecture & Reusability)
- **Vanilla JS**: Mã nguồn ghép nối chặt chẽ giữa HTML, CSS và JavaScript. Việc chia nhỏ các đoạn giao diện phức tạp ra nhiều file dễ dẫn đến rối mã nguồn và khó tái sử dụng ở nơi khác.
- **React**: Giao diện được chia thành các **Component** độc lập (`Header`, `BookCard`, `GenreFilter`). Các component nhận dữ liệu đầu vào qua `props` và render giao diện tương ứng, giúp mã nguồn sạch sẻ, dễ bảo trì, mở rộng và tái sử dụng.

## 3. Thao tác DOM
- **Vanilla JS**: Sử dụng trực tiếp các phương thức DOM API (`document.getElementById`, `createElement`, `textContent`). Thao tác DOM trực tiếp nhiều lần có thể ảnh hưởng đến hiệu năng khi ứng dụng phát triển lớn.
- **React**: Sử dụng **Virtual DOM**. React chỉ cập nhật những phần thật sự thay đổi trên giao diện thực tế, giúp tăng hiệu năng xử lý và trải nghiệm phát triển ứng dụng (Developer Experience - DX) mượt mà hơn.