const sides = document.querySelectorAll(".side-input")
const hypotenuseBtn = document.querySelector("#hypotenuse-btn")
const outPut = document.querySelector("#output")


function calculateSumOfSquares(a, b) {
  const sumOfSquares = a * a + b * b

  return sumOfSquares


}

function calculateHypotenuse() {


  const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
  const lenghtOfHypotenuse = Math.sqrt(sumOfSquares)
  outPut.innerText = "the length of hypotenuse is  " + lenghtOfHypotenuse 

}



hypotenuseBtn.addEventListener("click", calculateHypotenuse);