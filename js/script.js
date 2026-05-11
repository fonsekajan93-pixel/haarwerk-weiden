const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".fade").forEach((el) => obs.observe(el));

const galleryImages = document.querySelectorAll(".salon-gallery .gallery-img");
let galleryIndex = 0;

if (galleryImages.length > 0) {
  setInterval(() => {
    galleryImages[galleryIndex].classList.remove("active");
    galleryIndex = (galleryIndex + 1) % galleryImages.length;
    galleryImages[galleryIndex].classList.add("active");
  }, 4200);
}

/* Custom Cursor nur auf Desktop */
if (window.innerWidth <= 900) {
  document.querySelector(".cursor")?.remove();
  document.querySelector(".cursor-dot")?.remove();
} else {
  const cursor = document.querySelector(".cursor");
  const cursorDot = document.querySelector(".cursor-dot");

  if (cursor && cursorDot) {
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    const speed = 0.12;

    cursor.style.opacity = "0";
    cursorDot.style.opacity = "0";

    document.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
      cursorDot.style.opacity = "1";
    });

    document.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
      cursorDot.style.opacity = "0";
    });

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.opacity = "1";
      cursorDot.style.opacity = "1";

      cursorDot.style.left = mouseX + "px";
      cursorDot.style.top = mouseY + "px";
    });

    function animateRing() {
      ringX += (mouseX - ringX) * speed;
      ringY += (mouseY - ringY) * speed;

      cursor.style.left = ringX + "px";
      cursor.style.top = ringY + "px";

      requestAnimationFrame(animateRing);
    }

    animateRing();
  }
}
