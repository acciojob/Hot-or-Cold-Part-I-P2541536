//your code here
var randomNum;
var input;
function randomNumGenerator(){
	randomNum =Math.floor(Math.random()*41)-20;
	document.getElementById("Num").innerHTML = randomNum;
	GuessName();
	print();
}
Function gessName(){
	input = parseInt(document.getElementById("gess").value);
	
}
function print(){
	if(Math.abs(randomNum-input)<=5){
		document.getElementById("respond").innerHTML ="Hot";
		
	}
	else{
		document.getElementById("respond").innerHTML ="Cold";
	}
}
	
}