function switchOff(){
    document.getElementById("bulbImage").src ="https://res.cloudinary.com/dxudtajsv/image/upload/v1712905907/mohan-developerbulb-go-off-img.png";
    document.getElementById("catImage").src = "https://res.cloudinary.com/dxudtajsv/image/upload/v1712905040/mohan-developer-cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switch Off";
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e";
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9";

    
}
function switchOn(){
    document.getElementById("bulbImage").src ="https://res.cloudinary.com/dxudtajsv/image/upload/v1712901253/mohan-developer-bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://res.cloudinary.com/dxudtajsv/image/upload/v1712901614/mohan-developer-cat-img.png"
    document.getElementById("switchStatus").textContent = "Switch On";
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39";
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9";


}