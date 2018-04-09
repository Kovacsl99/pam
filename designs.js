// Select color input
const colorPicker = $("#colorPicker");
let canvasColor = colorPicker.val();

colorPicker.change(function(){
	canvasColor = colorPicker.val();
});

// Select size input
const inputHeight = $("#input_height");
const inputWidth = $("#input_width")

const sizePicker = $("#sizePicker");
const pixelCanvas = $("#pixel_canvas");


function makeGrid() {
	//Clear canvas
	pixelCanvas.children().remove(); 

	// Get the grid size
	let gridHeight = inputHeight.val();
	let gridWidth = inputWidth.val();

	// Grid creation
	for (let height = 0; height < gridHeight; height++) {
		pixelCanvas.append("<tr></tr>");
		
		for (let width = 0; width < gridWidth; width++) {
			pixelCanvas.children().last().append("<td></td>");
		};
	};
};

// When size is submitted by the user, call makeGrid()
sizePicker.on("submit", function(e){
	e.preventDefault();
	makeGrid();
});

// Right click contextmenu disabled
$(document).bind("contextmenu",function(e){
    return false;
});

// Change cell's color
pixelCanvas.on("mousedown", "td", function(e) {
	
	// Left click 
	if (e.which === 1) {
		$(this).css("background-color", canvasColor);	
	}
	// Right click
	if (e.which === 3) {
		$(this).css("background-color", "");
		return false;	
	}
});

