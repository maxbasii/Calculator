function Calculate(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ = vall_1 + vall_2;
    
    document.getElementById("result").innerHTML = "Результат = " + ( +summ.toFixed(2) );
}
function Minus(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ = vall_1 - vall_2;
    document.getElementById("result").innerHTML = "Результат = " + ( +summ.toFixed(2) );
}
function Divide(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ;
    if(vall_2 == "0"){
       summ = vall_1
    }else{
        summ = vall_1 / vall_2;
    }
     
    document.getElementById("result").innerHTML = "Результат = " + ( +summ.toFixed(3) );
}
function Multiplaid(){
    let vall_1 = Number(document.getElementById("input1").value);
    let vall_2 = Number(document.getElementById("input2").value);
    let summ = vall_1 * vall_2;
    document.getElementById("result").innerHTML = "Результат = " + ( +summ.toFixed(2) );
}