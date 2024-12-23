const track = document.getElementById("image-track");
let isMouseDown = false;

track.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  track.dataset.mouseDownAt = e.clientX;
});

track.addEventListener("mouseup", () => {
  isMouseDown = false;
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
});

track.addEventListener("mouseleave", () => {
  // Stop sliding if mouse leaves the track
  isMouseDown = false;
});

track.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const mouseMax = window.innerWidth / 3; // Adjust as needed for sensitivity

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

  for (const image of track.getElementsByClassName("image")) {
    image.animate(
      { objectPosition: `${100 + nextPercentage}% center` },
      { duration: 1200, fill: "forwards" }
    );
  }
});