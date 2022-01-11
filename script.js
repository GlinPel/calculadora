var displayDiv = document.querySelector("#display");
let operator = "";
let numero = "";
let saveValue = [];

function showInCalc(element){
    displayDiv.innerText = element;
}

function setOP(op){
    if(numero !== ""){
        saveValue.push(numero);
    }
    numero = "";
    operator = op;
    showInCalc(op);
}

function press(value){
    if(operator !== ""){
        saveValue[1] = operator;
    }
    numero += value;
    operator = "";
    showInCalc(numero);
}

function clr(){
    showInCalc(0);
    operator = "";
    numero = "";
    saveValue = [];
}

function calculate(){
    if(numero !== "") saveValue.push(numero);
    if(saveValue[1] === "*"){
        const producto = (Number(saveValue[0])*Number(saveValue[2])).toFixed(2);
        showInCalc(producto);
        saveValue = [producto];
    }else if(saveValue[1] === "/"){
        const division = (Number(saveValue[0])/Number(saveValue[2])).toFixed(2);
        showInCalc(division);
        saveValue = [division];
    }else if(saveValue[1] === "-"){
        const resta = (Number(saveValue[0])-Number(saveValue[2])).toFixed(2);
        showInCalc(resta);
        saveValue = [resta];
    }else if(saveValue[1] === "+"){
        const suma = (Number(saveValue[0])+Number(saveValue[2])).toFixed(2);
        showInCalc(suma);
        saveValue = [suma];
    }
}