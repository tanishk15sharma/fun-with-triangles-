var Angle1 = document.querySelector("#angle1")
var Angle2 = document.querySelector("#angle2")
var Angle3 = document.querySelector("#angle3")
var isTriangleBtn = document.querySelector("#is-triangle-btn")
var outPut = document.querySelector("#output")

function calculateSumOfAngles (angle1,angle2,angle3) {
    
    const  sumOfAngles = angle1+angle2+angle3
    return sumOfAngles;
         }

    function isTriangle () {
        const sumOfAngles = calculateSumOfAngles(Number(Angle1.value),Number(Angle2.value),Number(Angle3.value))
        
        if(sumOfAngles===180) {
            outPut.innerHTML = "YAP ! The angles form a Triangle "
        }

        else {
            outPut.innerHTML = "oh no ! The angles don't form a triangle "
        }


    }
    

    isTriangleBtn.addEventListener("click",isTriangle)

