document.querySelector(".tt-form").addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const errorMessages = validateForm();
  displayMessages(errorMessages);

  if (errorMessages.length === 0) {
    showSuccessMessage();
    document.querySelector(".tt-form").reset();
  }
}

function validateForm() {
  let errors = [];
  const name = document.getElementById("name").value.trim();
  const MSV = document.getElementById("MSV").value.trim();
  const major = document.getElementById("major").value.trim();
  const company = document.getElementById("company").value.trim();
  const time = document.getElementById("time").value;

  if (name.length < 2) {
    errors.push("Ghi đúng họ tên.");
  }
  if (!/^\d{10}$/.test(MSV)) {
    errors.push("Mã sinh viên phải có đúng 10 chữ số.");
  }
  if (major === "") {
    errors.push("Chuyên ngành phải được chọn.");
  }
  if (company.length < 2) {
    errors.push("Ghi đúng tên công ti.");
  }
  if (time < 12 || time > 16) {
    errors.push("Thời gian thực tập phải từ 12 đến 16 tuần.");
  }

  return errors;
}

function displayMessages(messages) {
  const errorMessage = document.querySelector(".error-message");
  errorMessage.innerHTML = messages.join("<br>");
  const successMessage = document.querySelector(".success-message");
  successMessage.style.display = "none";
}

function showSuccessMessage() {
  const successMessage = document.querySelector(".success-message");
  successMessage.style.display = "block";
  successMessage.innerHTML = "Đăng ký thành công!";
}
