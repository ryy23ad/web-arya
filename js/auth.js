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

function generateDeviceId() {
  return 'device-' + Math.random().toString(36).substr(2, 16);
}

// Cek apakah device ini sudah pernah login
function autoLogin() {
  const deviceId = localStorage.getItem("deviceId");
  const savedUsers = JSON.parse(localStorage.getItem("deviceLogins") || "{}");

  if (deviceId && savedUsers[deviceId]) {
    const username = savedUsers[deviceId];
    localStorage.setItem("loggedInUser", username);

    // Ganti alert jadi notifikasi custom
    showNotif("Login otomatis sebagai " + username, "success", 4000);

    // Delay sebelum redirect agar notifikasi terlihat
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
}

function showNotif(message, type = "info", duration = 3000) {
  const notif = document.getElementById("customNotif");
  const msg = document.getElementById("notifMessage");

  notif.className = `notif show ${type}`;
  msg.textContent = message;

  setTimeout(() => {
    notif.className = "notif hidden";
  }, duration);
}


// Jalankan auto login saat halaman dimuat
autoLogin();

// Form register
document.getElementById("registerForm").addEventListener("submit", function (e) {
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

// Form login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    showNotif("Login berhasil!", "success", 4000);
    localStorage.setItem("loggedInUser", username);

    // Simpan deviceId untuk auto login
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = generateDeviceId();
      localStorage.setItem("deviceId", deviceId);
    }

    let deviceLogins = JSON.parse(localStorage.getItem("deviceLogins") || "{}");
    deviceLogins[deviceId] = username;
    localStorage.setItem("deviceLogins", JSON.stringify(deviceLogins));

    window.location.href = "index.html";
  } else {
    alert("Username atau password salah!");
  }
});
