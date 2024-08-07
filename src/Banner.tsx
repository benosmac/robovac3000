export function Banner(props) {
  return (
    <header class="banner">
      <span class="settings">
        <label>
          Rows:
          <input
            type="number"
            name="rows"
            value={props.gridRows}
            onInput={(event) =>
              props.setGridRows(Number(event.currentTarget.value))
            }
          ></input>
        </label>
        <label>
          Columns:
          <input
            type="number"
            name="cols"
            value={props.gridCols}
            onInput={(event) =>
              props.setGridCols(Number(event.currentTarget.value))
            }
          ></input>
        </label>
      </span>
      <div class="info">
        <h2>Use your arrow keys to clean the floor!</h2>
        <img src="src/img/keys.png" alt="Keyboard arrow keys" />
      </div>
    </header>
  );
}
