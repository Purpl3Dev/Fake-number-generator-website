const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));
  if(randomNum==7) randomNum = 8;
  if(randomNum==3) randomNum = 4;
  if(randomNum==20) randomNum = 21;
  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum;
  }
}
