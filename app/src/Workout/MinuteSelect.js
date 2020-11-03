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

function MinuteSelect({ minuteChange, minutes }) {
  const classes = useStyles();
  const handleChange = (event) => {
    minuteChange(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>Minute Range</InputLabel>
      <Select value={minutes} onChange={handleChange}>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </FormControl>
  );
}

MinuteSelect.propTypes = {
  minuteChange: PropTypes.func.isRequired,
  minutes: PropTypes.number.isRequired,
};

export default MinuteSelect;
