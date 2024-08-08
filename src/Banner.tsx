import imgUrl from "/src/img/keys.png";

export function Banner(props) {
  return (
    <header class="banner">
      <span class="settings">
        <label>
          <span>
            Rows: <span class="value">{props.gridRows}</span>
          </span>
          <input
            type="range"
            name="rows"
            min="5"
            max="20"
            value={props.gridRows}
            onInput={(event) =>
              props.setGridRows(Number(event.currentTarget.value))
            }
          ></input>
        </label>
        <label>
          <span>
            Columns: <span class="value">{props.gridCols}</span>
          </span>
          <input
            type="range"
            name="cols"
            min="5"
            max="20"
            value={props.gridCols}
            onInput={(event) =>
              props.setGridCols(Number(event.currentTarget.value))
            }
          ></input>
        </label>
      </span>
      <div class="info">
        <h2>Guide Robovac with your arrow keys</h2>
        <img src={imgUrl} alt="Keyboard arrow keys" />
      </div>
    </header>
  );
}
