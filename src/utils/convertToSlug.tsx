export const convertToSlug = (text:string) => {
    return text
      .toLowerCase() // Chuyển thành chữ thường
      .normalize("NFD") // Chuẩn hóa chuỗi Unicode (bỏ dấu tiếng Việt)
      .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu thanh, dấu huyền, dấu sắc, dấu nặng
      .replace(/đ/g, "d") // Chuyển đổi "đ" thành "d"
      .replace(/[^a-z0-9 -]/g, "") // Xóa các ký tự không hợp lệ (chỉ giữ lại chữ cái, chữ số, khoảng trắng và dấu gạch ngang)
      .replace(/\s+/g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
      .replace(/-+/g, "-") // Loại bỏ các dấu gạch ngang liên tiếp
      .replace(/^-|-$/g, ""); // Loại bỏ dấu gạch ngang ở đầu và cuối chuỗi
  };
