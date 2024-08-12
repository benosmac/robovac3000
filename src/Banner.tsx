import { useGridCols, useGridRows } from "./modules/state";
import imgUrl from "/src/img/keys.png";

export function Banner() {
  const [gridRows, setGridRows] = useGridRows();
  const [gridCols, setGridCols] = useGridCols();
  return (
    <header class="banner">
      <span class="settings">
        <label>
          <span>
            Rows: <span class="value">{gridRows()}</span>
          </span>
          <input
            type="range"
            name="rows"
            min="5"
            max="20"
            value={gridRows()}
            onInput={(event) => setGridRows(Number(event.currentTarget.value))}
          ></input>
        </label>
        <label>
          <span>
            Columns: <span class="value">{gridCols()}</span>
          </span>
          <input
            type="range"
            name="cols"
            min="5"
            max="20"
            value={gridCols()}
            onInput={(event) => setGridCols(Number(event.currentTarget.value))}
          ></input>
        </label>
      </span>
      <div class="info">
        <h2>Use the D-Pad or your keyboard to clean the dirty floor</h2>
      </div>
    </header>
  );
}
