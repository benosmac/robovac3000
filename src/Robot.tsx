import { createEffect, onMount } from "solid-js";
import { RoboVacSVG } from "./RobovacSVG";
import { usePosX, usePosY, useDirection } from "./modules/state";

import { controls } from "./modules/controls";

export function Robot(props) {
  const [posX] = usePosX();
  const [posY] = usePosY();
  const [direction] = useDirection();

  let currentCell;

  // Track which grid cells have been vacuumed
  createEffect(() => {
    currentCell = document.querySelector(
      `[data-x='${posX()}'][data-y='${posY()}']`
    );
    currentCell?.classList.add("cleaned");
  });

  // Setup keyboard controls
  onMount(async () => {
    window.addEventListener("keydown", controls);
  });

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
