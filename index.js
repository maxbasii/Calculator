function Calculate(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ = vall_1 + vall_2;
    document.getElementById("result").innerHTML = "Результат = " + summ;
}
function Minus(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ = vall_1 - vall_2;
    document.getElementById("result").innerHTML = "Результат = " + summ;
}
function Divide(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ = vall_1 / vall_2;
    document.getElementById("result").innerHTML = "Результат = " + summ;
}
function Multiplaid(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ = vall_1 * vall_2;
    document.getElementById("result").innerHTML = "Результат = " + summ;
}