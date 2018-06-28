"use strict"

let ironman = {
    nation: "USA",
    earning: "$100m",
    age: 32,
    rating: 4.8,
    universe: "Marvel"
}

let batman = {
    nation: "USA",
    age: 36,
    earning: "$250m",
    rating: 4.5,
    universe: "DC"
}

let phone = {
    brand: "MI",
    model: "Redmi 4A",
    price: 6999,
    nation: "China",
    rating: 3.5
}

let myProp = "asdf";
let obj = ironman;

function runTask01(){
    if(obj.hasOwnProperty(myProp)){
        document.getElementById("result01").innerHTML = "Yes, it has the property";
    }
    else{
        document.getElementById("result01").innerHTML = "No, it doens't have the property";
    }
}

let obj01 = batman;
let obj02 = phone;

function runTask02(){

    for( let x in obj01){
        for(let y in obj02){
            if(x == y){
                document.getElementById("result02").innerHTML = "They have at least one same property";
                return;
            }
        }
        
    }
    document.getElementById("result02").innerHTML = "No, They don't have any property";
}
