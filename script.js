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
const soundBtn = document.getElementById("soundToggle");
const soundIcon = document.getElementById("soundIcon");

soundBtn.addEventListener("click", () => {
  if (video.muted) {
    video.muted = false;
    soundIcon.classList.remove("bi-volume-mute");
    soundIcon.classList.add("bi-volume-up");
  } else {
    video.muted = true;
    soundIcon.classList.remove("bi-volume-up");
    soundIcon.classList.add("bi-volume-mute");
  }
});