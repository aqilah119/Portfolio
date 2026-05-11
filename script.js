// =======================
// TYPING
// =======================
const text = "Farah Aqilah";
let i = 0;

function typing() {
  const el = document.getElementById("typing");
  if (!el) return;

  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
window.addEventListener("DOMContentLoaded", typing);


// =======================
// SCROLL REVEAL
// =======================
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});


// =======================
// SMOOTH SCROLL (NAV CLICK)
// =======================
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const id = this.getAttribute('href');
    const target = document.querySelector(id);

    target.scrollIntoView({
      behavior: "smooth"
    });
  });
});


// =======================
// ACTIVE NAV HIGHLIGHT
// =======================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;

    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


// =======================
// BUTTON SCROLL
// =======================
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// =======================
// SKILL CIRCLE ANIMATION
// =======================
const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {

  const target = circle.getAttribute("data-percent");

  let current = 0;

  const updateCircle = () => {

    if(current <= target){

      circle.style.setProperty("--percent", current);

      circle.querySelector("span").innerText = current + "%";

      current++;

      requestAnimationFrame(updateCircle);
    }
  };

  updateCircle();

});

