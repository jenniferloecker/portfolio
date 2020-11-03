import React from "react";
import { LineChart, Line, YAxis, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

const SimpleLineChart = ({ data }) => {
  return (
    <LineChart width={1250} height={500} data={data}>
      <XAxis dataKey="msoffset" type="number" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="workoutStat" stroke="blue" />
    </LineChart>
  );
};

SimpleLineChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default SimpleLineChart;
