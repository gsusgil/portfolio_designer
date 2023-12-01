function animation() {
  let animationText = [
    ["a", "m", " ", "D", "e", "s", "i", "g", "n", "e", "r"],
    ["a", "m", " ", "W", "e", "b", " ", "D", "e", "v"],
    ["a", "m", " ","C", "r", "e", "a", "t", "i", "v", "e"],
    ["h", "a", "v", "e", " ", "E", "n", "g", " ", "B", "-", "1"],
    ["a", "m", " ", "C", "o", "m", "m", "i", "t", "t", "e", "d"],
    ["a", "m", " ", "A", "d", "a", "p", "t", "i", "b", "l", "e"],
    ["a", "m", " ", "a", " ", "t", "e", "a", "m", " ", "p", "l", "a", "y", "e", "r"]
  ];

  let countLetters = -1;
  let arrayLevel = 0;

  const animationContainer = document.querySelector(".animation-text");
  let textDisplay = () => {
    countLetters++;
    animationContainer.textContent += animationText[arrayLevel][countLetters];

    if (countLetters == animationText[arrayLevel].length - 1) {
      clearInterval(interval);

      setTimeout(() => {
        interval = setInterval(() => {
          animationContainer.textContent = "";
          countLetters--;
          animationText[arrayLevel].pop();

          animationText[arrayLevel].forEach((element) => {
            animationContainer.textContent += element;
          });

          if (countLetters < 0) {
            clearInterval(interval);
            arrayLevel++;
            interval = setInterval(textDisplay, 150);

            if (arrayLevel > animationText.length - 1) {
              clearInterval(interval);
              arrayLevel = 0;
              animation();
            }
          }
        }, 150);
      }, 1000);
    }
  };
  let interval = setInterval(textDisplay, 150);
}
window.addEventListener("load", animation);
