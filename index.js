
//1st ke liye
var randomnumber1=Math.floor(Math.random()*6)+1;//random number from 1-6

var randomdiceimage="dice"+randomnumber1+".png";

var randomimagesrc=randomdiceimage; 

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesrc);

//2nd ke liye
var randomnumber2=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomnumber2+".png";

var randomimagesrc2=randomdiceimage;

var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimagesrc2);


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER1 WINS";

}
if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="PLAYER2 WINS";
    
}
if(randomnumber1===randomnumber2)
{
    document.querySelector("h1").innerHTML="DRAW";
    
}

