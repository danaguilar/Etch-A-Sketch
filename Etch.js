//Run when the body loads
var numOfSquares = 16;
function loadGrid(){
	//initialize the variables
	var sceneDiv = document.getElementById("scene");
	var htmlStr = '';
	var divStr = '';
	var inlineDiv = '';

	//Get width of the scene
	var widthOfSquares = sceneDiv.clientWidth/numOfSquares

	//Create strings of divs to write later
	divStr = '<div style="width: ' + widthOfSquares + '; height: '+ widthOfSquares + ';"></div>';
	inlineDiv = '<div id="pixel" style="display: inline-block; width: ' + widthOfSquares + '; height: '+ widthOfSquares + ';"></div>';
	//Write one row at a time.  Need as many rows as we have numOfSquares
	for (j=0; j < numOfSquares; j++ )
	{
		//Iterate through the number of squares to get a single row of divs at width long
		for (i=0; i < numOfSquares; i++ )
		{
				htmlStr = htmlStr + inlineDiv;
		}
	
		htmlStr = htmlStr + '<br>';
	}
	sceneDiv.innerHTML = htmlStr;
}

//Jquery begins here
$(document).ready(function(){
	//Load the grid
	loadGrid();

	//When I mouse over a div with the ID of pixel.  Make sure to do the nested selection
	$("#scene > #pixel").hover(function(){	
        $(this).css("background-color", "black");
	});
}); 


