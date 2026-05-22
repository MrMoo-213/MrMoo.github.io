const loginTime = localStorage.getItem("login_time");
const loginOk = localStorage.getItem("login_ok");

if (!loginOk || !loginTime) {
  window.location.href = "/login";
}

if (Date.now() - parseInt(loginTime) > 3600000) {
  localStorage.removeItem("login_ok");
  localStorage.removeItem("login_time");
  window.location.href = "/index.html";
}
