import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = function (props) {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);

  const maximum = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
