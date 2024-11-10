window.onload = function () {
  const texts = document.querySelectorAll(".main-text");
  let delay = 500;
  texts.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;
      item.style.animationDelay = `${index * delay}ms`;
      item.classList.add("appear");
    }, index * delay);
  });
  function updateVideoSource() {
    const video = document.getElementById("main-video");
    if (window.innerWidth <= 1024) {
      const videos = [
        "./source/mobile1.mp4",
        "./source/mobile2.mp4",
        "./source/mobile3.mp4",
      ];
      function getRandomVideo() {
        const randomIndex = Math.floor(Math.random() * videos.length);
        return videos[randomIndex];
      }
      video.src = getRandomVideo();
      video.style.top = "unset";
      video.style.left = "unset";
      video.style.transform = "unset";
      video.style.scale = "1.2";
      video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.play();
      });
    } else {
      video.src = "./source/desktop.mp4";
      video.style.top = "50%";
      video.style.left = "50%";
      video.style.transform = "translate(-50%, -50%)";
      video.addEventListener("ended", function () {
        video.currentTime = 0;
        video.play();
      });
    }
    video.load();
  }
  updateVideoSource();
  window.addEventListener("resize", updateVideoSource);
};
