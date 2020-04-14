var input = document.getElementById("input");
var btn =document.getElementById("btn");
var ul = document.querySelector("ul");

function inputlength(){
    return input.value.length;
}

function addElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    li.addEventListener("click",donee)
    ul.appendChild(li);
    input.value="";

function donee(){
    // var done = document.getElementsByTagName("li");
    li.classList.toggle("done");

}
}

btn.addEventListener("click" , function(){
    if(inputlength() > 0 ){
      addElement();
}})


input.addEventListener("keypress" , function(event){
    if(inputlength() > 0 && event.keyCode === 13){
        addElement();
}})
   




