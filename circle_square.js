document.getElementById("square").addEventListener("click" , square);
function square(){
    let radius = document.getElementById("radius").value;
    let result = radius*radius*3.14;
    document.getElementById("result").innerHTML = "Dien tich la: " + " " + result;
}