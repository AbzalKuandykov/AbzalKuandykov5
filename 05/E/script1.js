function func() {
    var a1 = document.getElementById("s11");
    var b1 = document.getElementById("s12");
    var c1 = document.getElementById("s13");
    var a2 = document.getElementById("s21");
    var b2 = document.getElementById("s22");
    var c2 = document.getElementById("s23");
    var a3 = document.getElementById("s31");
    var b3 = document.getElementById("s32");
    var c3 = document.getElementById("s33");
    var result = document.getElementById("result");
    
   
   var sum = (a1.value * (b2.value * c3.value- c2.value * b3.value))-(b1.value * (a2.value * c3.value- c2.value * a3.value))+(c1.value * (a2.value * b3.value- b2.value * a3.value));
    result.innerHTML = sum;
}
var demo = document.querySelector("#determinant");
demo.addEventListener('click', func);


