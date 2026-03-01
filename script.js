const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

hamburger?.addEventListener("click", () => {
  const isOpen = mobileNav.style.display === "block";
  mobileNav.style.display = isOpen ? "none" : "block";
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.style.display = "none";
  });
});
