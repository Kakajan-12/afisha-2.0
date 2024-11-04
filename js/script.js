// document.addEventListener("DOMContentLoaded", function () {

  // const texts = document.querySelectorAll(".main-text");

  // function showNextText() {
  //   if (currentIndex < texts.length) {
  //     texts[currentIndex].style.opacity = 1;
  //     currentIndex++;
  //     setTimeout(showNextText, 1000);
  //   }
  // }

  // showNextText();

  const texts = document.querySelectorAll(".main-text");
  let delay = 500; // задержка между появлениями в миллисекундах

  texts.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1; // установить видимость
      item.style.animationDelay = `${index * delay}ms`; // установить задержку
      item.classList.add("appear"); // добавить класс для анимации
    }, index * delay);
  });

  const video = document.getElementById("main-video");

  video.src =
    "./source/Gen_3_Alpha_Turbo_1125522594,_Make_an_action_anima,_DALL·E_2024.mp4";
  video.addEventListener("ended", function () {
    video.currentTime = 0;
    video.play();
  });

  // const video2 = document.getElementById("second");

  // video2.src =
  //   "./source/Gen_3_Alpha_Turbo_669305172,_Make_an_action_anima,_DALL·E_2024_10.mp4";
  // video2.addEventListener("ended", function () {
  //   video2.currentTime = 0;
  //   video2.play();
  // });
// });