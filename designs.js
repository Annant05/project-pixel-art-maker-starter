// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
// Your code goes here!

$("#submit_size").click(makeGrid);


let rows, columns, selectedColor, gridCreated = false;

// We take input  of inputHeight/horizontalRows  from the form using jquery.
console.log("click Detected on submit");
rows = $("#inputHeight").val();
console.log("ROWS : " + rows);

// We take input of inputWidth/VerticalColumns from the form using jquery
columns = $("#inputWidth").val();
console.log("COLUMNS : " + columns);

// We take input of selected color for drawing.
selectedColor = $("#colorPicker").val();
console.log("COLOR : " + selectedColor);


function makeGrid() {

    // initially grid is empty i.e. table has 0 cells.


    // initially the no of cells in a row is empty or 0.

    // Create a no of rows with the no of columns generated above.
    // ex.: <tr><td></td><tr>  this will create a grid.

    if (!gridCreated ) \
        for (let trow = 0; trow <= rows; trow++) {
            // console.log("table_col in  row creating loop : " + tablecol);
            let tablecol;
            // create a no of cells for a row.  ex. : <td><td> equals to one cell.
            for (let tcell = 0; tcell <= columns; tcell++) {
                tablecol += "<td></td>";
                // console.log("table_col in loop : " + tablecol);
            }
            // console.log("table_col  bottom outside loop : " + tablecol);

            // add all the generated rows in the table.
            // console.log("tablegrid = " + tableGrid);
            $("#pixelCanvas").append("<tr>" + tablecol + "</tr>");
        }
        gridCreated = true;
    } else {
        console.log("Grid already Created");
    }

    // append the grid to the table tag to display.


}

