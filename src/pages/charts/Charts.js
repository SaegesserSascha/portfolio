import "./charts.scss";
import React, { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import data from "data/covid19switzerland.json";

export default function Graphs() {
  const ranges = Object.freeze({
    "14Days": 14,
    "28Days": 28,
    "allDays": data.length
  });

  const [timeRange, setTimeRange] = useState(ranges["14Days"]);

  function getKeys() {
    let keys = [];
    for (let key in data[0]) {
      if (key !== "date") {
        keys.push(key);
      }
    }
    return keys;
  }

  function formatAndTranslateCategory(category) {
    switch (category) {
      case "cases":
        return "Laborbestätigte Fälle";
      case "casesCumulative":
        return "Laborbestätigte Fälle insgesamt";
      case "hospitalizations":
        return "Laborbestätigte Hospitalisationen";
      case "hospitalizationsCumulative":
        return "Laborbestätigte Hospitalisationen insgesamt";
      case "mortality":
        return "Laborbestätigte Todesfälle";
      case "mortalityCumulative":
        return "Laborbestätigte Hospitalisationen insgesamt";
      default:
        return undefined;
    }
  }

  const filteredData = () => {
    let filteredData = [...data].splice(data.length - timeRange, timeRange);
    return filteredData;
  }

  const charts = getKeys().map(el => {
    return (
      <div className="chart-container">
        <h4 className="category">{formatAndTranslateCategory(el)}</h4>
        <ResponsiveContainer className="chart" width="100%" height={250} key={el} >
          <BarChart
            data={filteredData()}
          >
            <XAxis dataKey="date"></XAxis>
            <YAxis type="number" />
            <Tooltip wrapperStyle={{ backgroundColor: "red" }} />
            <Bar isAnimationActive={false}
              dataKey={el}
              fill="#ff7043"
            >
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  });

  const handleSelect = () => {
    setTimeRange(document.getElementById("timeRange").value);
  }

  return (
    <div>
      <select className="time-range" name="timeRange" id="timeRange" onChange={handleSelect}>
        <option value={ranges["14Days"]}>14 Tage</option>
        <option value={ranges["28Days"]}>28 Tage</option>
        <option value={ranges.allDays}>Gesamter Zeitraum</option>
      </select>
      <div className="bar-chart-wrapper">
        {charts}
      </div>
    </div>
  );
}