import { createMemo, Index } from "solid-js";
import { Robot } from "./Robot";

// Generate nested array representing the grid rows and cells
function setUpGrid(rows: number, cols: number): [][] {
  const rowArray = Array(rows);
  for (let i = 0; i < rows; i++) {
    rowArray[i] = Array(cols).fill("");
  }
  return rowArray;
}

export function Grid(props) {
  const gridRows = () => props.gridRows;
  const gridCols = () => props.gridCols;
  // Recreate the grid layout when rows and cols change
  const grid = createMemo(() => setUpGrid(gridRows(), gridCols()));

  return (
    <div
      class="grid"
      // Set the grid size with CSS grid
      style={{
        "grid-template-rows": `repeat(${gridRows()}, 1fr)`,
        "grid-template-columns": `repeat(${gridCols()}, 1fr)`,
      }}
    >
      {/* Set starting coordinates and grid boundary for Robovac */}
      <Robot startX={1} startY={1} bounds={{ x: gridCols(), y: gridRows() }} />

      <Index each={grid()}>
        {/* Loop through the rows */}
        {(rows, y) => {
          return (
            <Index each={rows()}>
              {/* Loop through each column within the row */}
              {(cell, x) => {
                return (
                  <div
                    class="cell"
                    data-x={x}
                    data-y={y}
                    style={{ "grid-row": y + 1, "grid-column": x + 1 }}
                  ></div>
                );
              }}
            </Index>
          );
        }}
      </Index>
    </div>
  );
}
