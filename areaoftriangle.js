const sides = document.querySelectorAll(".side-input")
const areaBtn = document.querySelector("#area-btn")
const outPut = document.querySelector("#output")

function calculateBaseIntoHeight(base, height) {
    const baseIntoHeight = (base * height) ;
    return baseIntoHeight;
}
function checkButtonHandler() {
    var side1 = Number(sides[0].value);
    var side2 = Number(sides[1].value);

    if(!side1 || !side2  ) {
        outPut.innerText="input all the fields" 
    }
    else if (side1<1||side2<1) {
        outPut.innerText="input value should not be -"
    }
    else {
        calculateArea(sides.value)
    }

}



function calculateArea() {
    const baseIntoHeight = calculateBaseIntoHeight(Number(sides[0].value), Number(sides[1].value));
    const calArea = 1/2 * baseIntoHeight;
    outPut.innerText = "The Area of Triangle  " + calArea;


    //console.log(baseIntoHeight)//

}




areaBtn.addEventListener("click", checkButtonHandler);

//if ((angle1 !== "") && (angle2 !== "") && (angle3 !== "")) {
