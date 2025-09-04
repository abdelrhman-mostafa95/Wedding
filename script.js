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



const galleryImgs = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const closeBtn = document.getElementById('closeBtn');

galleryImgs.forEach(img => {
  img.addEventListener('click', () => {
    popup.classList.add('active');
    popupImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
});

// اقفل البوب اب لما تدوس برة الصورة
popup.addEventListener('click', (e) => {
  if (e.target !== popupImg) {
    popup.classList.remove('active');
  }
});