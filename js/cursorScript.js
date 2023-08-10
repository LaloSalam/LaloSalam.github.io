const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const handleMouseOver = function (scale) {
  cursor.style.transform = "scale(" + scale + ") translate(-10%, -10%)";
};

const handleMouseLeave = function () {
  cursor.style.transform = "translate(-50%, -50%)";
};
