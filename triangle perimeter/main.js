//variables
let calcBtn = document.getElementById("calc-btn");
let distAB = document.getElementById("distanceAB");
let distBC = document.getElementById("distanceBC");
let distAC = document.getElementById("distanceAC");
let perimeterABC = document.getElementById("perABC");
//event listeners
calcBtn.addEventListener("click",calcBtnClicked)

 function dist(a,b,c,d) {
    let rise = c-d;
    let run = b-a;
    return Math.sqrt(rise *rise + run *run);
 }
function calcBtnClicked(){
   //input
    let XA = xA.value;
    let YA = yA.value;
    let XB = xb.value;
    let YB = yb.value;
    let XC = xc.value;
    let YC = yc.value;

    //caculate lenghts
    let AB = dist(XA,YA,XB,YB)
    let AC = dist(XA,YA,XC,YC)
    let BC = dist(XB,YB,XC,YC)
    
    //output results
     distAB.innerHTML = AB
     distAC.innerHTML = AC
     distBC.innerHTML = BC
     perimeterABC.innerHTML = AB + AC + BC
}




  



