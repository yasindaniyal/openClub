document.addEventListener("DOMContentLoaded", () => {

  // -------------------- SIDEBAR TOGGLE --------------------
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebarToggle");

  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    toggleBtn.classList.toggle("active");
  });


});