const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
});

gsap.from(".hero", {
    duration: 1.5,
    y: -50,
    opacity: 0
});


// 🔥 3D Tilt + Mouse Glow
const cards = document.querySelectorAll(
    ".cpu-card, .ram-card, .SSD-card, .GPU-card, .Network-card, .Motherboard-card"
);

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 15;
        const rotateY = (x - centerX) / 15;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0)";
    });
});


// 🚀 Scroll Animation (Reveal on scroll)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

document.getElementById("exploreBtn").addEventListener("click", function () {
  const intro = document.querySelector(".intro");

  intro.classList.add("show"); // make section visible
  intro.scrollIntoView({
    behavior: "smooth"
  });
});

function cpuInfo(){
  document.getElementById("cpuText").innerText =
  "CPU processes instructions and controls the computer.";
}


