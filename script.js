const colors = [
  "#10888859",
  "#108888D9",
  "#1088888C",
  "#108888FF",
  "#10888866",
  "#108888FF",
  "#10888880",
  "#108888CC",
  "#108888FF",
  "#108888B3",
  "#1088884D",
  "#108888A6",
  "#108888BF",
  "#10888873",
  "#10888840",
  "#10888833",
  "#10888899",
  "#108888F0",
  "#108888E6",
  "#10888899",
];

const allPaths = document.querySelectorAll("#drawing-svg path");

allPaths.forEach((path, index) => {
  const color = colors[index % colors.length];
  path.style.fill = color;
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    allPaths.forEach((path, index) => {
      path.classList.add("init-animate");
      path.style.animationDelay = `${index * 0.05}s`;
    });
  }, 400);
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const menuItems = document.querySelectorAll(".menu-item");

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("hidden");
  });

  document.addEventListener("click", function () {
    menu.classList.add("hidden");
  });

  menu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menu.classList.add("hidden");
    });
  });
});

// FAQ
function toggleAnswer(button) {
  const answer = button.closest("div").querySelector("p.mt-7");
  const plusIcon = button.querySelector("svg:nth-child(2)"); // "+" SVG
  const minusIcon = button.querySelector("svg:nth-child(1)"); // "-" SVG

  // Toggle the answer visibility
  answer.classList.toggle("hidden");

  // Toggle the icons
  plusIcon.classList.toggle("hidden");
  minusIcon.classList.toggle("hidden");
}
