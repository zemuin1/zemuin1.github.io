var buttonClick = document.getElementById("buttonClick"), buttonCount = 0;

buttonClick.onclick = function(){
    buttonCount += 1;
    buttonClick.innerHTML = "Count: " + buttonCount;
};