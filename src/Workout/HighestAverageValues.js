import React from "react";
import PropTypes from "prop-types";

function HighestAverageValues({ highestAverage, minutes, workoutStat }) {
  return (
    <div>
      The highest average {workoutStat} for {minutes} minutes is{" "}
      {highestAverage}.
    </div>
  );
}

HighestAverageValues.propTypes = {
  highestAverage: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  workoutStat: PropTypes.string.isRequired,
};
export default HighestAverageValues;
