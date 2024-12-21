let GeneralSize = "29vmin";
let ChangedSize = "30vmin";
//JavaScript to toggle the display of additional data
function hoverimage(img) {
  img.style.boxShadow = "0 0 1em white";
  img.style.width = ChangedSize;
  img.style.height = ChangedSize;
}
function normal(img) {
  img.style.boxShadow = "0 0 0 white";
  img.style.width = GeneralSize;
  img.style.height = GeneralSize;
}
const track = document.getElementById("image-track");
let isMouseDown = false;
window.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  track.dataset.mouseDownAt = e.clientX;
});

window.addEventListener("mouseup", (e) => {
  isMouseDown = false;
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
});

window.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!isMouseDown) return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const mouseMax = window.innerWidth / 3; // allow full window width for scrolling

  const percentage = (mouseDelta / mouseMax) * -100;
  const nextPercentage = Math.max(
    Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0),
    -100
  );
  track.dataset.percentage = nextPercentage;
  track.animate(
    { transform: `translate(${nextPercentage}%, 0%)` },
    { duration: 1300, fill: "forwards" }
  );
  console.log(`translate(${nextPercentage}%, 0%)`);
  for (const image of track.getElementsByClassName("image")) {
    console.log("Hello World");
    image.animate(
      { objectPosition: `${100 + nextPercentage}% center` },
      { duration: 1200, fill: "forwards" }
    );
  }
  console.log(`${100 + nextPercentage}% center`);
});

// Add an event listener to show/hide the navigation links
navToggle.addEventListener("click", () => {
  navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});
