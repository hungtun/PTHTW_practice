Bước 1: Có tài khoản (nếu chưa có)
curl -s -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"devuser","email":"dev@example.com","password":"password123"}'
(Nếu user đã tồn tại thì bỏ qua bước này.)

Bước 2: Đăng nhập, lấy accessToken
curl -s -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"usernameOrEmail":"devuser","password":"password123"}'
Trong JSON trả về sẽ có trường accessToken (và thường có tokenType, user, …).

Có jq thì chỉ lấy token:

curl -s -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"usernameOrEmail":"devuser","password":"password123"}' \
  | jq -r '.accessToken'
Copy nguyên chuỗi token (dài, không có dấu ngoặc kép thừa).

Bước 3: Gắn token vào đúng tab trình duyệt
Mở app React (ví dụ http://localhost:5173).
Mở DevTools → tab Console, chạy (thay PASTE_TOKEN bằng token vừa copy):
localStorage.setItem("accessToken", "PASTE_TOKEN");
location.reload();
Hoặc: Application (Chrome) → Local Storage → chọn origin của Vite → Add row: key accessToken, value là token → F5.