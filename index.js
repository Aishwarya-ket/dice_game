
var randomNumber1 = Math.floor(Math.random() * 7);  //generate random number from 1-6
/*console.log(Math.floor(randomNumber1));*/

var randomDiceImage ="dice"+randomNumber1 +".png";  //dice1.png-dice6.png for our convinience to change img src text accoridingly
var randomImageSource ="images/"+randomDiceImage;   //images/dice1.png -images/dice6.png
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



var randomNumber2=Math.floor(Math.random() *7);
var randomImageSource2="images/dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="🚩Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}























/*if(randomNumber1==="1"){
    document.querySelector(".img1").setAttribute("<img src='./images/dice1.png'");
}
else if(randomNumber1==="2"){
    document.querySelector(".img1").setAttribute("<img src='./images/dice2.png'");
}
else if(randomNumber1==="3"){
    document.querySelector(".img1").setAttribute("<img src='./images/dice3.png'");
}
else if(randomNumber1==="4"){
    document.querySelector(".img1").setAttribute("<img src='./images/dice4.png'");
}
else if(randomNumber1==="5"){
    document.querySelector(".img1").setAttribute("<img src='./images/dice5.png'");
}
else{
    document.querySelector(".img1").setAttribute("<img src='./images/dice6.png'");

}*/
