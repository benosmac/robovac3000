import { createSignal, Signal } from "solid-js";
//Grid
const [gridRows, setGridRows] = createSignal(5);
const [gridCols, setGridCols] = createSignal(5);
//Robot
const [posX, setPosX] = createSignal(1);
const [posY, setPosY] = createSignal(1);
const [direction, setDirection] = createSignal("ArrowUp");

export const useGridRows = (): Signal<number> => [gridRows, setGridRows];
export const useGridCols = (): Signal<number> => [gridCols, setGridCols];

export const usePosX = (): Signal<number> => [posX, setPosX];
export const usePosY = (): Signal<number> => [posY, setPosY];

export const useDirection = (): Signal<string> => [direction, setDirection];
