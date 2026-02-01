## alona_sashuk
Test task from PlayToMax 

## Description
Imagine that we have a rectangular playing field consisting of cells.
Each cell can contain one game element. When selecting any of the cells, we must remove the element and the entire associated group of the same elements from the field (see the figure below).
How would you implement the search for elements of such a group?

Task was implemented using web development interface to show how it works in action.
The main method which performs search of the siblings with same value implemented 
in the method findSiblingElements() of script.js file which takes two required parameters as a coordinates of the initial cell - row and column.

## Installing
1. Download all files from the repository (index.html, script.js and styles.css) in one folder.

## Executing program 
1. Open index.html in any modern browser. 
2. Click on any cell in the grid table.
3. All siblings with same value will be highlighted.
4. To change the grid size and values please open script.js in any IDE. Reffer to the bottom of the file with test example of the grid (currently on line 169) which looks like this.

[
  [9, 7, 7, 4],
  [9, 6, 7, 7],
  [9, 10, 7, 4],
  [1, 7, 3, 4],
]

Change the values and size of the grid to whatever you want and save the file. Refresh opened index.html in the browser and check the result with new grid.

## Authors
Alona Sashuk a.sashuk1201@gmail.com
