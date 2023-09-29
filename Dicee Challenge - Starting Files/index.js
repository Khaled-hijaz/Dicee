var randomNumber1 = Math.floor((Math.random() * 6) +1);

if (true) {
    
    document.querySelector("img1").setAttribute("src", images/dice1.png);

}

else if (randomNumber1==2) {
    
    document.querySelector("img1").innerHTML = "<img class='img1' src='./images/dice2.png'></img>";

}

else if (randomNumber1==3) {
    
    document.querySelector("img1").innerHTML = "<img class='img1' src='./images/dice3.png'></img>";

}

else if (randomNumber1==4) {
    
    document.querySelector("img1").innerHTML = "<img class='img1' src='./images/dice4.png'></img>";

}

else if (randomNumber1==5) {
    
    document.querySelector("img1").innerHTML = "<img class='img1' src='./images/dice5.png'></img>";

}