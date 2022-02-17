let inputBox = document.getElementById("input1");
let rand = document.getElementById("rand");

function getValue(){
    rand.innerHTML = inputBox.value;
    console.log("get : "+ inputBox.value);
}

function setValue(){
        setTimeout(function(){
        let generateRandomNumber = Math.floor( (Math.random() * 2000) + 1);
            rand.innerHTML = generateRandomNumber;
            inputBox.value = generateRandomNumber;
            console.log("set : "+inputBox.value);
        },1000)
}

// setTimeout(function(){
    
//     rand.innerHTML = generateRandomNumber;
//     inputBox.value = generateRandomNumber;
//     console.log("set : "+inputBox.value);

// },3000)
// alert("inputtt");

