document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".main-text");
  let delay = 500;

  setTimeout(() => {
    texts.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
        item.style.animationDelay = `${index * delay}ms`;
        item.classList.add("appear");
      }, index * delay);
    });
  }, 2000);

  const video = document.getElementById("main-video");

  video.src =
    "./source/Gen_3_Alpha_Turbo_1125522594,_Make_an_action_anima,_DALL·E_2024.mp4";
  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
  });
});