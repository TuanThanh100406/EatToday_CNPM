# Kiến trúc hệ thống – EatToday

## 1. Kiến trúc tổng thể
Hệ thống theo mô hình **Microservices + Clean Architecture**:

- **Backend API (FastAPI)**  
  - Xử lý logic nghiệp vụ.  
  - Expose REST API.  
  - Tích hợp với ML service.  

- **Mobile App (React Native)**  
  - Giao diện cho người dùng chính (housewife).  

- **Web Admin (ReactJS)**  
  - Giao diện cho quản trị viên.  

- **Database (MySQL/PostgreSQL)**  
  - Lưu trữ người dùng, món ăn, lịch ăn.  

- **ML Service (Python)**  
  - Gợi ý món ăn dựa trên dữ liệu.  

## 2. Sơ đồ kiến trúc
```text
[Mobile App] ----\
                   ---> [Backend API] ---> [Database]
[Web Admin] ----/                 \
                                  [ML Service]

