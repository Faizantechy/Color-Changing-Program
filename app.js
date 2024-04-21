

var body=document.querySelector('body');

function changeColor(name){
    body.style.backgroundColor=name;
}



function rColor(){

    var r = Math.round(Math.random()*255);
    var g = Math.round(Math.random()*255);
    var b = Math.round(Math.random()*255);
    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;


}

rColor();


