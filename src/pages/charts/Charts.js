import "./charts.scss";
import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import data from "data/covid19switzerland.json";
import ChartInformation from "components/chartInformation/ChartInformation";

export default function Graphs() {
  const ranges = Object.freeze({
    "14Days": 14,
    "28Days": 28,
    "allDays": data.length
  });

  const CHARTHEIGHT = 200; // In px
  const [timeRange, setTimeRange] = useState(ranges["14Days"]);
  const [isSticky, setIsSticky] = useState(false);

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

  const formatDateLabel = (filteredData) => {
    console.log(filteredData.date);
    const values = filteredData.date.split(".");
    return `${values[0]}.${values[1]}`;
  }

  function shouldDisplay(el) {
    switch (el) {
      case "cases":
      case "hospitalizations":
      case "mortality":
        return true;
      default:
        return false;
    }
  }

  window.onscroll = () => {
    if (window.pageYOffset > 72) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="value">{payload[0].value}</p>
          <p className="label">{formatAndTranslateCategory(payload[0].name)}</p>
          <p className="date">{payload[0].payload.date}</p>
        </div>
      );
    }
    return null;
  };

  const charts = getKeys().map(el => {
    if (shouldDisplay(el)) {
      return (
        <div className="chart-container">
          <h4 className="category">{formatAndTranslateCategory(el)}</h4>
          <ChartInformation category={el} data={filteredData()} />
          <ResponsiveContainer
            className="chart"
            width="100%"
            height={CHARTHEIGHT}
            key={el}
          >
            <BarChart
              data={filteredData()}
            >
              <YAxis mirror={true} interval="preserveEnd" tickCount={3} />
              <XAxis tick={false} height={1} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                isAnimationActive={false}
                dataKey={el}
                fill="#ff7043"
              >
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <div className="labels">
            <p>{filteredData()[0].date}</p>
            <p>{filteredData()[filteredData().length - 1].date}</p>
          </div>
        </div>
      );
    }
  });

  const handleSelect = () => {
    setTimeRange(document.getElementById("timeRange").value);
  }

  return (
    <div>
      <select
        className={`time-range ${isSticky ? "sticky" : ""}`}
          name="timeRange"
          id="timeRange"
          onChange={handleSelect}>
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