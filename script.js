document.getElementById("video_speed").playbackRate = 0.5;

const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach(el => observer.observe(el));

const video = document.getElementById("video_speed");
const soundBtn = document.getElementById("sound-btn");

soundBtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    soundBtn.textContent = "🔊"; 
  } else {
    video.muted = true;
    soundBtn.textContent = "🔇"; 
  }
});