var checklist = document.getElementById("checklist");

var items = checklist.querySelector("li");
var inputs = checklist.querySelector("input");

items.addEventListener("click", editItem);
inputs.addEventListener("blur", updateItem);
inputs.addEventListener("keypress", itemKeyPress);


function editItem(){
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
    if(input.value === "12345678"){
        console.log("Girdim");
    }
}

function updateItem(){
    console.log("We blurred!!! ", inputs.value);
    this.parentNode.className = "";
    if(inputs.value === "02122003"){
        console.log("girdim2");
        chanegeScreen();
    }
}

function itemKeyPress(event){
    
    if(event.which === 13){
        updateItem.call(this);
    }
}

function chanegeScreen(){
    window.location.href = "https://merto03.github.io/myProject2/my2/myIndex2";
}