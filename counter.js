var counter = document.getElementById("buttonClick"),
buttonCount = 0;

counter.onclick = function(){
    buttonCount += 1;
    counter.innerHTML = "Count: " + buttonCount;
};