document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy giá trị từ các trường nhập liệu
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;
    const interests = Array.from(
      document.getElementById("interests").selectedOptions
    ).map((option) => option.value);

    // Tùy chỉnh xử lý dữ liệu ở đây, ví dụ, gửi dữ liệu đến máy chủ
    console.log("Username: " + username);
    console.log("Password: " + password);
    console.log("Date of Birth: " + dob);
    console.log("Interests: " + interests.join(", "));
  });
