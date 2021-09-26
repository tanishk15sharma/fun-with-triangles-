var Angle1 = document.querySelector("#angle1")
var Angle2 = document.querySelector("#angle2")
var Angle3 = document.querySelector("#angle3")
var isTriangleBtn = document.querySelector("#is-triangle-btn")
var outPut = document.querySelector("#output")


isTriangleBtn.addEventListener("click", checkButtonHandler);


function checkButtonHandler() {

    var angle1 = Number(Angle1.value);
    var angle2 = Number(Angle2.value);
    var angle3 = Number(Angle3.value);


    if ((angle1 !== "") && (angle2 !== "") && (angle3 !== "")) {

        if ((Math.sign(angle1) === 1) && (Math.sign(angle2) === 1) && (Math.sign(angle3) === 1)) {
            outPut.innerText = "";
            isTriangle();
        } else if ((Math.sign(angle1) === -1) || (Math.sign(angle2) === -1) || (Math.sign(angle3) === -1)) {
            showOutputText("Angles can't be negatives. Please enter  + value.");
        } else if ((Math.sign(angle1) === 0) || (Math.sign(angle2) === 0) || (Math.sign(angle3) === 0)) {
            showOutputText("Angles can't be empty. ");
        }

    }
}


function calculateSumOfAngles(angle1, angle2, angle3) {

    const sumOfAngles = angle1 + angle2 + angle3
    return sumOfAngles;

}



function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(Angle1.value), Number(Angle2.value), Number(Angle3.value));



    if (sumOfAngles === 180) {
        outPut.innerText = "YAP ! The angles form a Triangle "

    } else {
        outPut.innerText = "oh no ! The angles don't form a triangle "
    }


}

function showOutputText(msg) {

    outPut.innerText = msg;
}


//isTriangleBtn.addEventListener("click",isTriangle)