var squares = document.querySelectorAll(".square")
var chosenColorDisplay = document.getElementById("chosenColorDisplay");
var h1 = document.querySelectorAll("h1");
var win = false;
var actionDisplay = document.querySelector("#actionDisplay");
var resetButton = document.querySelector("#reset");
var easyMode = document.querySelector("#easyMode");
var hardMode = document.querySelector("#hardMode");
var chosenColorHex = ("#000000");
var mode = "hard";

hardMode.classList.add("selected")

function assigningColors(){
	var pickColor = Math.floor(Math.random()*16777217)
	var hexString = pickColor.toString(16);
	return ("#" + hexString);
}

//assigning colors to the squares//
for (var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = assigningColors()
	
}
//pick a lucky color//
var chosenColorHex = squares[Math.floor(Math.random()*squares.length)].style.backgroundColor


//assigning eventListener to squares//
function assignEventListener (numberOfSquares){
for (var i =0;i<numberOfSquares; i++){
	squares[i].addEventListener("click",function (){
		if (this.style.backgroundColor == chosenColorHex){
			actionDisplay.textContent = "Correct!";
			for (var j=0;j<numberOfSquares; j++){
				squares[j].style.backgroundColor = chosenColorHex;
			};
			for (k=0;k<h1.length;k++){
				h1[k].style.backgroundColor=chosenColorHex;
			}
		} else {
			actionDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#252525";
		}
	})}};

assignEventListener(squares.length);

chosenColorDisplay.textContent = chosenColorHex


//reset button//
resetButton.addEventListener("click", function(){
	if (mode == "easy") {
		y= (squares.length - 3);
	} else y = (squares.length);
	
	for (var i=0;i<y;i++){
	squares[i].style.backgroundColor = assigningColors()};
	chosenColorHex = squares[Math.floor(Math.random()*y)].style.backgroundColor;
	actionDisplay.textContent = "guess which!";
	chosenColorDisplay.textContent = chosenColorHex;
	for (var i=0; i<h1.length ; i++){
	h1[i].style.backgroundColor = "steelblue";}
	assignEventListener(y);



});

//easy mode//
easyMode.addEventListener("click", function(){
	mode = "easy";
	easyMode.classList.add("selected");
	hardMode.classList.remove("selected");

	for (var i=0;i<(squares.length - 3);i++){
	squares[i].style.backgroundColor = assigningColors(squares.length - 3)};
	chosenColorHex = squares[Math.floor(Math.random()*(squares.length - 3))].style.backgroundColor;
	actionDisplay.textContent = "guess which!";
	chosenColorDisplay.textContent = chosenColorHex;
	for (var i=0; i<h1.length ; i++){
	h1[i].style.backgroundColor = "steelblue";}
	
	for (var i=(squares.length - 3);i<(squares.length);i++){
		squares[i].style.backgroundColor = "#252525";
		squares[i].addEventListener("click", function(){
			actionDisplay.textContent = "Disabled!";
		});
		squares[i].classList.add("easyMode");
	}

	assignEventListener(squares.length - 3);
})

//hard mode//
hardMode.addEventListener("click", function(){
	mode = "hard";
	easyMode.classList.remove("selected");
	hardMode.classList.add("selected");
	y = squares.length;
	for (var i=0;i<y;i++){
		squares[i].style.backgroundColor = assigningColors()
		squares[i].classList.remove("easyMode");
	};
		chosenColorHex = squares[Math.floor(Math.random()*y)].style.backgroundColor;
		actionDisplay.textContent = "guess which!";
		chosenColorDisplay.textContent = chosenColorHex;
		for (var i=0; i<h1.length ; i++){
		h1[i].style.backgroundColor = "steelblue";}
		assignEventListener(y);


})