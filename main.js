// script.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  // Toggle menu mobile saat tombol diklik
  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Menutup menu mobile saat link diklik
  const mobileLinks = menu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });

  // Efek Navbar Transparan ke Solid saat di-scroll (Opsional untuk estetika)
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("shadow-md");
    } else {
      nav.classList.remove("shadow-md");
    }
  });
});
