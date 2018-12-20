// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
// Your code goes here!

$("#submit_size").click(makeGrid);

let pixelCanvas, canvasHeight, canvasWidth, selectedColor;

pixelCanvas = $("#pixelCanvas");

// Function that helps in drawing.
function drawOnCanvas() {



}

function makeGrid() {
    // Delete the old grid from table.
    pixelCanvas.children().remove();

    // We take input  of inputHeight  from the form using jquery.
    canvasHeight = $("#inputHeight").val();

    // We take input of inputWidth from the form using jquery
    canvasWidth = $("#inputWidth").val();

    // We take input of selected color for drawing.
    selectedColor = $("#colorPicker").val();
    console.log("click Detected on submit");
    console.log("COLOR : " + selectedColor);

    // Create the table single row with cells.
    let single_row = "";
    console.log("COLUMNS : " + canvasWidth);
    for (let noOfCells = 0; noOfCells <= canvasWidth; noOfCells++) {
        single_row += "<td></td>";
        // console.log("table_col in loop : " + tablecol);
    }

    //create  multiple rows using the above single row.
    let canvas = "";
    console.log("ROWS : " + canvasHeight);
    for (let noOfRows = 0; noOfRows <= canvasHeight; noOfRows++) {
        canvas += '<tr>' + single_row + '</tr>';
    }

    console.log(canvas);
    $("#pixelCanvas").append(canvas);

    drawOnCanvas();
}
