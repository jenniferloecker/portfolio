import React from "react";
import { observer } from "mobx-react";
import Grid from "@material-ui/core/Grid";

const FrameDetails = ({ frame, index }) => {
  const frameCumulativeScore = frame.cumulativeScore;
  return (
    <Grid item>
      <u>Frame {index + 1} </u> <br />
      1: {frame.roll1} <br />
      2: {frame.roll2} <br />
      {index === 9 && <div>3: {frame.roll3}</div>}
      Score:{frameCumulativeScore}
      <br />
      <br />
    </Grid>
  );
};

export default observer(FrameDetails);
