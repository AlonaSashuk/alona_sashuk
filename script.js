'use strict';

/**
 * Represents a PlayField.
 * @class
 * @example
 * const obj = new PlayField(grid);
 */

class PlayField {
  /**
   * Creates an instance of PlayField.
   * @param {Array} grid - nested arrays of playing field representing rows and columns. 
   * Example: [
                [9, 7, 7, 4],
                [9, 6, 7, 7],
                [9, 10, 7, 4],
                [1, 7, 3, 4],
              ]
   *
   */

  constructor(grid) {
    if (!grid) {
      alert('Grid was not provided to constructor');
      return;
    }
    this.grid = grid;

    //initializing amount cells based on provided grid
    this.rowsFieldNumber = grid.length;
    this.columnFieldNumber = grid[0].length;

    // rendering play field on the page and intializing click event
    this.renderPlayField();
    this.highlightSiblingsElementsByClick();
  }

  /**
   * Searches all siblings (neighbors) cells with same value as initial element.
   * @param {Number} row - row number of the cell.
   * @param {Number} col - column number of the cell.
   * @returns {Array} - nested array of the found cells coordinates.
   */

  findSiblingElements(row, col) {
    if ((!row && row < 0) || (!col && col < 0)) {
      alert('Initial coordinates of element was not provided');
      return;
    }

    let initialEl = [row, col];
    let checkingElArr = [];

    //create copy from play field array to mark visited cells
    let visitedElArr = JSON.parse(JSON.stringify(playField));
    let clickedElValue = this.grid[row][col];

    //array with sibling elements coordinates
    let resultArr = [];

    // adding first cell coordinates to the queue
    checkingElArr.push(initialEl);

    // adding first cell coordinates to the result array
    resultArr.push(initialEl);

    while (checkingElArr.length > 0) {
      initialEl = checkingElArr.shift();
      let initialElRow = initialEl[0];
      let initialElCol = initialEl[1];

      if (
        initialElRow < 0 ||
        initialElRow >= this.rowsFieldNumber ||
        initialElCol < 0 ||
        initialElCol >= this.columnFieldNumber ||
        visitedElArr[initialElRow][initialElCol] == true ||
        this.grid[initialElRow][initialElCol] !== clickedElValue
      ) {
        continue;
      }

      // set visited cell value as true
      visitedElArr[initialElRow][initialElCol] = true;

      resultArr.push([initialElRow, initialElCol]);

      // Adding all sibling cells to queue
      checkingElArr.push([initialElRow + 1, initialElCol]);
      checkingElArr.push([initialElRow - 1, initialElCol]);
      checkingElArr.push([initialElRow, initialElCol + 1]);
      checkingElArr.push([initialElRow, initialElCol - 1]);
    }

    return resultArr;
  }

  /**
   *Renders playing field as table based on grid value in the constructor.
   */

  renderPlayField() {
    let playingField = '<table class="field-table">';

    for (let i = 0; i < this.rowsFieldNumber; i++) {
      playingField += '<tr>';

      for (let j = 0; j < this.columnFieldNumber; j++) {
        if (this.grid[i][j] === undefined) {
          this.grid[i][j] = '?';
        }

        playingField +=
          '<td data-row="' +
          i +
          '" data-column="' +
          j +
          '">' +
          this.grid[i][j] +
          '</td>';
      }

      playingField += '</tr>';
    }

    playingField += '</table>';

    document.getElementById('main-container').innerHTML = playingField;
  }

  /**
   * Highlights initial and siblings(neighbors) cells.
   */

  highlightSiblingsElementsByClick() {
    document.querySelectorAll('.field-table td').forEach((element) => {
      if (element) {
        element.addEventListener('click', (event) => {
          //remove highlight before click event
          document.querySelectorAll('.field-table td').forEach((element) => {
            if (element) {
              element.classList.remove('highlighted-cell');
            }
          });

          if (event) {
            let rowClickedEl = +event.target.dataset.row;
            let colClickedEl = +event.target.dataset.column;
            let playingField = document.querySelector('.field-table');

            const siblingsElementsArr = this.findSiblingElements(
              rowClickedEl,
              colClickedEl,
            );
            for (let i = 0; i < siblingsElementsArr.length; i++) {
              playingField.rows[siblingsElementsArr[i][0]].cells[
                siblingsElementsArr[i][1]
              ].classList.add('highlighted-cell');
            }
          }
        });
      }
    });
  }
}

// Test grid as an example. Please paste your own grid with values here to work with it.
let playField = [
  [9, 7, 7, 4],
  [9, 6, 7, 7],
  [9, 10, 7, 4],
  [1, 7, 3, 4],
];

let myPlayCard = new PlayField(playField);
