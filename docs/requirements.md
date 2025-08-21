# Yêu cầu hệ thống – EatToday

## 1. Mô tả chung
Ứng dụng **EatToday** hỗ trợ các bà nội trợ lên kế hoạch bữa ăn hàng ngày, gợi ý thực đơn dựa trên dữ liệu món ăn và thói quen.

## 2. Người dùng
- **Housewife** (người dùng chính): tạo kế hoạch bữa ăn, xem gợi ý.
- **Administrator**: quản lý dữ liệu món ăn, kiểm soát hệ thống.

## 3. Yêu cầu chức năng
1. Đăng ký, đăng nhập (JWT-based).
2. Quản lý hồ sơ người dùng.
3. Gợi ý thực đơn theo ngày/tuần.
4. Tìm kiếm món ăn theo nguyên liệu.
5. Quản lý danh sách món ăn (CRUD).
6. Quản trị (admin): thêm, sửa, xóa món ăn.
7. Xuất báo cáo lịch ăn theo tuần.

## 4. Yêu cầu phi chức năng
- Bảo mật: xác thực + phân quyền.
- Khả năng mở rộng: backend tách biệt, có thể tích hợp AI/ML.
- Hiệu năng: trả kết quả gợi ý < 2 giây.
- Triển khai: hỗ trợ Docker, CI/CD.

## 5. Ràng buộc
- Ngôn ngữ backend: Python (FastAPI).
- Mobile app: React Native.
- Web admin: ReactJS.
- Database: MySQL/PostgreSQL.
- ML: Python + scikit-learn (hoặc TensorFlow).
