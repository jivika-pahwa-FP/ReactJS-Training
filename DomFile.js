let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");

box1.onmouseover = function(event){
   // console.log(event);
    box1.style.backgroundColor = "crimson";
};

box1.onmouseout = function(){
    box1.style.backgroundColor = "Black";
};

box2.onmouseover = function(){
    box2.style.backgroundColor = "crimson";
}

box2.onmouseout = function(){
    box2.style.backgroundColor = "black";
}

box1.addEventListener("click",function(){
        console.log("clicked.....");
});

box1.addEventListener("click",function(){
    console.log("clicked againnnnn.....");
});