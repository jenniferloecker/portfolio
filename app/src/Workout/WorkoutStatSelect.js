import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
  formControl: {
    margin: 8,
  },
}));

function WorkoutStatSelect({ workoutStatChange, workoutStat }) {
  const classes = useStyles();
  const handleChange = (event) => {
    workoutStatChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Workout Stat</InputLabel>
      <Select value={workoutStat} onChange={handleChange}>
        <MenuItem value={"power"}>Power</MenuItem>
        <MenuItem value={"heartRate"}>Heart Rate</MenuItem>
        <MenuItem value={"speed"}>Speed</MenuItem>
      </Select>
    </FormControl>
  );
}

WorkoutStatSelect.propTypes = {
  workoutStatChange: PropTypes.func.isRequired,
  workoutStat: PropTypes.number.isRequired,
};

export default WorkoutStatSelect;
