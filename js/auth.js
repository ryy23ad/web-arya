// Register Akun
document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (localStorage.getItem(username)) {
      alert("Username sudah digunakan!");
    } else {
      localStorage.setItem(username, password);
      alert("Akun berhasil dibuat!");
    }
  });

// Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    alert("Login berhasil!");
    localStorage.setItem("loggedInUser", username);
    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
});

function showPhoneForm() {
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("phoneForm").style.display = "flex";
}