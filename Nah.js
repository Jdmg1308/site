
//     // JavaScript to toggle the display of additional data
//     document.getElementById('contact-me').addEventListener('click', function() {
//         var additionalData = document.getElementById('additionalData');
//         if (additionalData.style.display === 'none' || additionalData.style.display === '') {
//             additionalData.style.display = 'block';
//             // this.textContent = 'Hide Additional Data';
//         } else {
//             additionalData.style.display = 'none';
//             // this.textContent = 'Show Additional Data';
//         }
//     }); 
//     function hoverimage(img) {
//       img.style.boxShadow = "0 0 10em white";
//       img.style.width = "42vmin";
//       img.style.height = "55vmin";
//     }
//     function normal(img) {
//       img.style.boxShadow = "0 0 0 white";
//       img.style.width = "40vmin";
//       img.style.height = "54vmin";
//     }
//     function resume_h(img) {
//       img.style.boxShadow = "0 0 10em white";
//       img.style.height = "55vmin";
//     }
//     function resume_n(img) {
//       img.style.boxShadow = "0 0 0 white";
//       img.style.height = "54vmin";
//     }
//     const track = document.getElementById("image-track");
//     window.onmousedown = e => {
//       track.dataset.mouseDownAt = e.clientX;
//     };
//     window.onmouseup = e => {
//       track.dataset.mouseDownAt = "0";
//       track.dataset.prevPercentage = track.dataset.percentage;
//     };
//     window.onmousemove = e => {
//       e.preventDefault();
//       if (track.dataset.mouseDownAt === "0") return;
//       const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
//       const mouseMax = window.innerWidth / 3;
//       const percentage = (mouseDelta / mouseMax) * -100;
//       const nextPercentage = Math.max(Math.min(parseFloat(track.dataset.prevPercentage) + percentage, 0), -100);
//       track.dataset.percentage = nextPercentage;
//       track.animate({ transform: `translate(${nextPercentage}%, -50%)` }, { duration: 1200, fill: "forwards" });
//       console.log(`translate(${nextPercentage}%, -50%)`);
//       for (const image of track.getElementsByClassName("image")) {
//         image.animate({ objectPosition: `${100 + nextPercentage}% center` },
//           { duration: 1200, fill: "forwards" });
//       }
//       console.log(`${100 + nextPercentage}% center`);
//     };

//     const navLinks = document.querySelector('.nav-links');
//     const navToggle = document.createElement('div');
//     navToggle.className = 'nav-links-toggle';
//     navToggle.innerHTML = '&#9776;'; // Unicode for the hamburger icon

//     // Append the toggle button to the navbar
//     document.querySelector('.navbar').appendChild(navToggle);

//     // Add an event listener to show/hide the navigation links
//     navToggle.addEventListener('click', () => {
//         navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
//     });
