import {
  usePosX,
  usePosY,
  useDirection,
  useGridRows,
  useGridCols,
} from "./state.jsx";

const [posX, setPosX] = usePosX();
const [posY, setPosY] = usePosY();
const [direction, setDirection] = useDirection();
const [gridRows] = useGridRows();
const [gridCols] = useGridCols();

//Handle all keydown events
export function controls(event: KeyboardEvent | MouseEvent) {
  console.log(event.target);
  if (event instanceof KeyboardEvent) {
    // Only proceed for arrow keys
    if (event.key == "ArrowDown" || "ArrowUp" || "ArrowLeft" || "ArrowRight") {
      // Stop arrow keys from triggering page scroll
      event.preventDefault();
      // Stop arrow keys from changing input values if input is focused.
      if (document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }
      handleMovement(event.key);
    } else {
      return;
    }
  }
  if (event instanceof MouseEvent) {
    if (event.target instanceof HTMLButtonElement) {
      const direction = event.target.dataset.key;
      direction && handleMovement(direction);
    }
  }
}

// Handle arrow key events
function handleMovement(k: string) {
  // If robot if facing another direction, turn to face arrow direction
  if (k != direction()) {
    setDirection(k);
    return;
  }
  // Fallback if view transitions API not supported
  if (!document.startViewTransition) {
    moveRobot(k);
    return;
  }
  // animate position change with view transitions API
  document.startViewTransition(() => moveRobot(k));
}

function moveRobot(k: string) {
  // Set robot's new position if it is within the grid bounds
  switch (k) {
    case "ArrowDown":
      if (posY() < gridRows() && posY() >= 1) setPosY((prev) => prev + 1);
      console.log(k);
      break;
    case "ArrowUp":
      if (posY() <= gridRows() && posY() > 1) setPosY((prev) => prev - 1);
      break;
    case "ArrowLeft":
      if (posX() <= gridCols() && posX() > 1) setPosX((prev) => prev - 1);
      break;
    case "ArrowRight":
      if (posX() < gridCols() && posX() >= 1) setPosX((prev) => prev + 1);
      break;
    default:
      return;
  }
}
