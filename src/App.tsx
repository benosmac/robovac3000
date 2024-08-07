import { createSignal, type Component } from "solid-js";
import { Grid } from "./Grid";
import "./css/style.css";
import { Banner } from "./Banner";
const App: Component = () => {
  const [gridRows, setGridRows] = createSignal(5);
  const [gridCols, setGridCols] = createSignal(5);
  return (
    <>
      <Banner
        gridRows={gridRows()}
        setGridRows={setGridRows}
        gridCols={gridCols()}
        setGridCols={setGridCols}
      />
      <Grid gridRows={gridRows()} gridCols={gridCols()} />
    </>
  );
};

export default App;
