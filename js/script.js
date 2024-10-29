const arrows = document.querySelectorAll(".main-arrow");

const texts = document.querySelectorAll(".main-text");

arrows.forEach((arrow, i) => {
    arrow.addEventListener("click", () => {
        texts.forEach((text) => {
          text.classList.remove("active")
      })
    texts[i].classList.add("active");
    console.log("click",texts[i]);
  });
});


const video = document.getElementById("main-video");

video.src =
  "./source/Gen_3_Alpha_Turbo_1125522594,_Make_an_action_anima,_DALL·E_2024.mp4";
video.addEventListener("ended", function () {
  video.currentTime = 0;
  video.play();
});


const video2 = document.getElementById("second");

video2.src =
  "./source/Gen_3_Alpha_Turbo_669305172,_Make_an_action_anima,_DALL·E_2024_10.mp4";
video2.addEventListener("ended", function () {
  video2.currentTime = 0;
  video2.play();
});