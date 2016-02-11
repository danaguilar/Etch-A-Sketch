//finds an appropriate square width given a a number of squares and a width
function findSquareLen(numOfSquares,sceneWidth)
{
	var widthOfSquares = (Math.floor(100*sceneWidth/numOfSquares))/100;
	if(widthOfSquares*numOfSquares>sceneWidth)
	{
		return widthOfSquares - 1;
	}
	else
	{
		return widthOfSquares;
	}

}

//Run when the body loads
function loadGrid(numOfSquares){
	//initialize the variables
	var sceneDiv = document.getElementById("scene");
	var htmlStr = '';
	var inlineEven = '';
	var inlineOdd = '';

	//Get width of the scene
	var widthOfSquares =   findSquareLen(numOfSquares,sceneDiv.clientWidth);

	//Create strings of divs to write later
	inlineEven = '<div id="pixel" class = "even" style="display: inline-block; width: ' + widthOfSquares + '; height: '+ widthOfSquares + ';"></div>';
	inlineOdd = '<div id="pixel" class = "odd" style="display: inline-block; width: ' + widthOfSquares + '; height: '+ widthOfSquares + ';"></div>';
	//Write one row at a time.  Need as many rows as we have numOfSquares
	for (j=0; j < numOfSquares; j++ )
	{
		//Iterate through the number of squares to get a single row of divs at width long
		for (i=0; i < numOfSquares; i++ )
		{	
				//Splitting between odd and even divs
				if((j+i)%2 == 0){
					htmlStr = htmlStr + inlineEven;
				}
				else{
					htmlStr = htmlStr + inlineOdd;

				}
				
		}
	
		htmlStr = htmlStr + '<br>';
	}
	sceneDiv.innerHTML = htmlStr;
}

//resets the scene
function reset(){
	$("#scene > #pixel").css("background-color", "gray");
}

// Returns a random hex color.  Thanks to Paul Irish for the solution
// www.paulirish.com/2009/random-hex-color-code-snippets/
function randColor(){
	return '#'+Math.floor(Math.random()*16777215).toString(16);
}

//When I mouse over a div with the ID of pixel.  Make sure to do the nested selection
function watchPix(){
	$("#scene > #pixel").hover(function(){	
        $(this).css("background-color", randColor());
	});
}

//Jquery begins here
$(document).ready(function(){
	//Load the grid
	loadGrid(16);
	watchPix();

	//Redraws the grid with new values
	$("#controls > #newGrid").click(function(){
		//Get new grid size
		var size = prompt("How many squares wide should the new grid be?", "16");
		//Load the new grid
		if(size>0){
		loadGrid(size);	
		watchPix();
		}
	});

	
	//Clears the scene
	$("#controls > #reset").click(function(){
		reset();
	});

	
}); 


