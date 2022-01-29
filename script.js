const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", generateRandomNum);

function generateRandomNum() {
  const fromNum = document.querySelector(".fromNum").value;
  const toNum = document.querySelector(".toNum").value;

  randomNum = Math.floor(Math.random() * parseInt(toNum));
  
  if(randomNum==7) randomNum = 8; /* Put here your number to exclude in brackets and number to trasform in*/
  if(randomNum==3) randomNum = 4; /* Put here your number to exclude in brackets and number to trasform in*/
  
  if (randomNum >= parseInt(fromNum)) {
    const randomNumEl = document.querySelector(".randomNumEl");
    randomNumEl.innerHTML = randomNum;
  }
}
