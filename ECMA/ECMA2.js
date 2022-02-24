var para = document.getElementById("para");
function checkNum(){
    var inputValue = document.getElementById('inputVal').value;
    if(!inputValue){ // inputValue == "" (blank)
        // alert("enter something");
        para.innerHTML = "enter something";
    }
    if(inputValue){
        if(isNaN(inputValue)){
            // alert("provide a number ");
            para.innerHTML = "Provide a number";
        }
        else{
            // alert("its a number");
            para.innerHTML = "its a number";
        }
    }
    
}