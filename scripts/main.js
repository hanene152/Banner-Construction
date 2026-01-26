const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

const form = document.getElementById("quoteForm");
const statusEl = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  statusEl.textContent = "Saved locally for now. We’ll wire this up to email/Netlify forms later.";
  form.reset();
});
