import React, { useState, useEffect } from "react";
import workoutData from "./workout-data.json";
import SimpleLineChart from "./SimpleLineChart";
import HighestAverageValues from "./HighestAverageValues";
import WorkoutStatSelect from "./WorkoutStatSelect";
import MinuteSelect from "./MinuteSelect";

const millisecondConversion = 60000;
const differenceBetweenReadings = 1000;
const samples = workoutData.samples;

const MainDisplay = () => {
  const [minutes, setMinutes] = useState(20);
  const [workoutStat, setWorkoutStat] = useState("power");
  const [highestAverage, setHighestAverage] = useState(0);
  const [minimalData, setMinimalData] = useState([]);

  useEffect(() => {
    const constructData = () => {
      const data = samples.map((sample) => {
        return {
          msoffset: sample.millisecondOffset,
          workoutStat: sample.values[workoutStat],
        };
      });
      setMinimalData(data);
      return data;
    };

    const sumOfArray = (newArray) => {
      const justData = newArray.map((object) => object.workoutStat);
      const newSum = justData.reduce((a, b) => a + b);
      if (isNaN(newSum)) return 0;
      return newSum;
    };

    const findHighestSum = (data) => {
      const millisecondsInMinuteValue = minutes * millisecondConversion;
      const dataPointsToGroup =
        millisecondsInMinuteValue / differenceBetweenReadings;
      let initialArray = data.slice(0, dataPointsToGroup);
      let currentCounter = dataPointsToGroup;
      let runningSum = sumOfArray(initialArray);
      let highestSum = runningSum;
      while (currentCounter <= data.length) {
        let firstElement = initialArray.shift();
        let nextElement = data[currentCounter];
        initialArray.push(nextElement);
        if (
          initialArray.length === dataPointsToGroup &&
          firstElement &&
          firstElement.hasOwnProperty("workoutStat") &&
          nextElement &&
          nextElement.hasOwnProperty("workoutStat")
        ) {
          let difference = nextElement.workoutStat - firstElement.workoutStat;
          runningSum = runningSum + difference;
          if (runningSum > highestSum) {
            highestSum = runningSum;
          }
        }
        currentCounter++;
      }
      setHighestAverage(highestSum / dataPointsToGroup);
    };
    const data = constructData();
    findHighestSum(data);
  }, [workoutStat, minutes]);

  const handleMinuteChange = (minutes) => {
    setMinutes(minutes);
  };

  const handleWorkoutStatChange = (workoutStat) => {
    setWorkoutStat(workoutStat);
  };

  return (
    <div className="display-flex">
      <section>
        <SimpleLineChart data={minimalData} />
        <WorkoutStatSelect
          workoutStatChange={handleWorkoutStatChange}
          workoutStat={workoutStat}
        />
        <MinuteSelect minuteChange={handleMinuteChange} minutes={minutes} />
        <HighestAverageValues
          highestAverage={highestAverage}
          minutes={minutes}
          workoutStat={workoutStat}
        />
      </section>
    </div>
  );
};

export default MainDisplay;
