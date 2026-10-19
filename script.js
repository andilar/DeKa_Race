const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");
const inquiryForm = document.querySelector("[data-inquiry-form]");

const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 24);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.querySelector(".sr-only").textContent = "Menü öffnen";
  navigation.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  menuButton.querySelector(".sr-only").textContent = isOpen ? "Menü öffnen" : "Menü schließen";
  navigation.classList.toggle("open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealElements.forEach((element) => observer.observe(element));
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

inquiryForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(inquiryForm);
  const message = [
    "Hallo DK-Race,",
    "",
    `ich interessiere mich für: ${formData.get("service")}`,
    `Fahrzeug: ${formData.get("vehicle")}`,
    formData.get("message") ? `Nachricht: ${formData.get("message")}` : null,
    "",
    `Viele Grüße, ${formData.get("name")}`,
  ]
    .filter(Boolean)
    .join("\n");

  const result = inquiryForm.querySelector("[data-form-result]");
  const text = inquiryForm.querySelector("[data-inquiry-text]");
  const copyStatus = inquiryForm.querySelector("[data-copy-status]");

  text.textContent = message;
  copyStatus.textContent = "";
  result.hidden = false;
  result.focus();
});

document.querySelector("[data-copy-button]")?.addEventListener("click", async () => {
  const text = document.querySelector("[data-inquiry-text]")?.textContent ?? "";
  const copyStatus = document.querySelector("[data-copy-status]");

  try {
    await navigator.clipboard.writeText(text);
    copyStatus.textContent = "Kopiert!";
  } catch {
    copyStatus.textContent = "Bitte den Text oben manuell markieren und kopieren.";
  }
});
