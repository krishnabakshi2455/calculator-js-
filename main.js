let num1 = parseFloat(prompt("ENTER"))
let Sign = (prompt("SYMBOL"))
let num3 = parseFloat(prompt("ENTER"))

if(Sign === "+"){
    console.log(num1 + num3);
}
else if(Sign === "-"){
    console.log(num1 - num3);
}
else if(Sign === "/"){
    console.log(num1 / num3);
}
else if(Sign === "*"){
    console.log(num1 * num3);
}
else{
    console.log(`invalid number`);
}