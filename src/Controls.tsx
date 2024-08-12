import { controls } from "./modules/controls";
import { useGridCols, useGridRows } from "./modules/state";

export function Controls() {
  const [gridRows, setGridRows] = useGridRows();
  const [gridCols, setGridCols] = useGridCols();

  return (
    <div class="controls">
      <button type="button" name="up" data-key="ArrowUp" onClick={controls}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6z"
          ></path>
        </svg>
      </button>
      <button type="button" name="down" data-key="ArrowDown" onClick={controls}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"
          ></path>
        </svg>
      </button>
      <button type="button" name="left" data-key="ArrowLeft" onClick={controls}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6z"
          ></path>
        </svg>
      </button>
      <button
        type="button"
        name="right"
        data-key="ArrowRight"
        onClick={controls}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
