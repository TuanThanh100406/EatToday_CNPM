# Thiết kế chi tiết hệ thống EatToday

## 1. Mô hình ca sử dụng (Use Case Diagram)

Người dùng chính: **Housewife (Bà nội trợ)**  
Quản trị viên: **Administrator**


---

## 2. Sơ đồ lớp (Class Diagram)

Các lớp chính:

- **User**
  - user_id, username, password, role
- **MealPlan**
  - plan_id, date, user_id
- **Recipe**
  - recipe_id, name, ingredients, steps
- **Ingredient**
  - ingredient_id, name, quantity, unit
- **ShoppingList**
  - list_id, user_id, items
- **Admin**
  - admin_id, username, password

Quan hệ:
- User ↔ MealPlan (1-N)
- MealPlan ↔ Recipe (N-M)
- Recipe ↔ Ingredient (N-M)
- User ↔ ShoppingList (1-N)

---

## 3. Sơ đồ ERD (Entity Relationship Diagram)

**Bảng chính**:

- USERS(user_id, name, email, password, role)
- RECIPES(recipe_id, title, description, instructions, category)
- INGREDIENTS(ingredient_id, name, unit)
- RECIPE_INGREDIENTS(recipe_id, ingredient_id, quantity)
- MEAL_PLANS(plan_id, user_id, date)
- MEAL_PLAN_RECIPES(plan_id, recipe_id)
- SHOPPING_LISTS(list_id, user_id)
- SHOPPING_ITEMS(item_id, list_id, ingredient_id, quantity)

---

## 4. Sơ đồ trình tự (Sequence Diagram)

**Trường hợp: Bà nội trợ nhận gợi ý món ăn**

1. User mở app → chọn “Gợi ý món ăn”
2. Hệ thống gửi yêu cầu đến **Recommendation Service**
3. Recommendation Service truy xuất dữ liệu từ **Recipe DB**
4. Kết quả trả về danh sách món ăn phù hợp
5. User chọn món → lưu vào MealPlan
6. Hệ thống cập nhật DB & hiển thị xác nhận


---

## 5. Thiết kế giao diện (UI Mockup - sơ bộ)

- **Trang đăng nhập/đăng ký**
- **Trang chính**: gợi ý món ăn, tìm kiếm
- **Trang kế hoạch bữa ăn**: hiển thị lịch
- **Trang công thức chi tiết**
- **Trang quản lý nguyên liệu & shopping list**

