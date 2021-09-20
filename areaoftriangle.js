const sides = document.querySelectorAll(".side-input")
const areaBtn = document.querySelector("#area-btn")
const outPut = document.querySelector("#output")

function calculateBaseIntoHeight(base, height) {
    const baseIntoHeight = (base * height) * 1 / 2;
    return baseIntoHeight;
}

function calculateArea() {
    const baseIntoHeight = calculateBaseIntoHeight(Number(sides[0].value), Number(sides[1].value));

    outPut.innerText = "The Area of Triangle  " + baseIntoHeight


    //console.log(baseIntoHeight)//

}


areaBtn.addEventListener("click", calculateArea);