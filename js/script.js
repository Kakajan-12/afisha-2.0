window.addEventListener("load", function () {
  // function setFullHeight() {
  //   const vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  //   console.log("runned");
  // }

  // window.addEventListener("resize", setFullHeight);
  // window.addEventListener("load", setFullHeight);

  const preloader = document.getElementById("preloader");

  function updateVideoSource() {
    const video = document.getElementById("main-video");
    if (window.innerWidth <= 990) {
      const videoSources = [
        "./source/mobile1.mp4",
        "./source/mobile2.mp4",
        "./source/mobile3.mp4",
      ];

      let currentVideoIndex = 0;

      video.addEventListener("ended", () => {
        currentVideoIndex++;
        if (currentVideoIndex >= videoSources.length) {
          currentVideoIndex = 0;
        }
        video.src = videoSources[currentVideoIndex];
        video.play();
      });

      video.src = videoSources[currentVideoIndex];
      video.style.top = "unset"
      video.style.transform = "translate(-40%, 5%)";
      video.style.scale = "1.2";
      video.play();
    } else {
      video.src = "./source/desktop.mp4";
      video.style.top = "50%";
      video.style.left = "50%";
      video.style.transform = "translate(-50%, -50%)";
      video.addEventListener("ended", function () {
        video.currentTime = 0;
      });
    }
    // video.load();
    video.addEventListener("canplay", function () {
      preloader.style.display = "none";
      const texts = document.querySelectorAll(".main-text");
      let delay = 500;
      texts.forEach((item, index) => {
        setTimeout(() => {
          item.style.opacity = 1;
          item.style.animationDelay = `${index * delay}ms`;
          item.classList.add("appear");
        }, index * delay);
      });
    });
  }
  updateVideoSource();
  window.addEventListener("resize", updateVideoSource);
  document.body.style.overflow = "auto";
});
