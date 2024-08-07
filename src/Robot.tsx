import { createEffect, createSignal, onMount } from "solid-js";
import { RoboVacSVG } from "./RobovacSVG";

export function Robot(props) {
  const [posX, setPosX] = createSignal(props.startX);
  const [posY, setPosY] = createSignal(props.startY);
  const [direction, setDirection] = createSignal("ArrowUp");
  let currentCell;

  // Track which grid cells have been vacuumed
  createEffect(() => {
    currentCell = document.querySelector(
      `[data-x='${posX() - 1}'][data-y='${posY() - 1}']`
    );
    currentCell?.classList.add("cleaned");
  });

  // Setup keyboard controls
  onMount(async () => {
    window.addEventListener("keydown", controls);
  });

  //Handle all keydown events
  function controls(event) {
    // Only proceed for arrow keys
    if (event.key == "ArrowDown" || "ArrowUp" || "ArrowLeft" || "ArrowRight") {
      // Stop arrow keys from triggering page scroll
      event.preventDefault();
      // Stop arrow keys from changing input values if input is focused.
      if (document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }
      handleArrowKeys(event.key);
    } else {
      return;
    }
  }

  // Handle arrow key events
  function handleArrowKeys(k: string) {
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
        if (posY() < props.bounds.y && posY() >= 1) setPosY((prev) => prev + 1);
        break;
      case "ArrowUp":
        if (posY() <= props.bounds.y && posY() > 1) setPosY((prev) => prev - 1);
        break;
      case "ArrowLeft":
        if (posX() <= props.bounds.x && posX() > 1) setPosX((prev) => prev - 1);
        break;
      case "ArrowRight":
        if (posX() < props.bounds.x && posX() >= 1) setPosX((prev) => prev + 1);
        break;
      default:
        return;
    }
  }

  return (
    <div
      id="robot"
      // Set the robot's position on the CSS grid
      data-direction={direction()}
      data-posX={posX()}
      data-posY={posY()}
      // Set the robot's position on the CSS grid
      style={{ "grid-row": posY(), "grid-column": posX() }}
    >
      <RoboVacSVG />
    </div>
  );
}
