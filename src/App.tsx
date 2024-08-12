import { type Component } from "solid-js";
import { Grid } from "./Grid";
import "./css/style.css";
import { Banner } from "./Banner";
import { Robot } from "./Robot";
import { Controls } from "./Controls";

const App: Component = () => {
  return (
    <>
      <Banner />
      <Grid>
        <Robot />
      </Grid>
      <Controls />
    </>
  );
};

export default App;
