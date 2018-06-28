"use strict"

//  NOTE:
//  Following codes could be better. I shouldn't even write them.
//  But I'm practising. So, please bear with me...

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

function append(obj, str)
{
    for(var x in obj){
        str += x + ": " + ironman[x] + "<br>";
    }
    str += "===============<br>";
    return str;
}

function showAll(){
    var string = "";
    string = append(ironman, string);
    string = append(batman, string);
    string = append(phone, string);
  
    document.getElementById("displayObjects").innerHTML = string;
}
        // Assignment01:
        // 1. Create a function to check if a property exists in a given object.
        // 2. Create a function to check if two given objects have same properties.

function runTask01(){
    isPropertyExists01(ironman, );
}

function isPropertyExists01(obj, prop){
    for(var x in obj){
        if(x === prop)
        {
            document.getElementById("result01").innerHTML = "Yes, the property exists";
        }
    }
    document.getElementById("result01").innerHTML = "No, the property doesn't exists";
}
