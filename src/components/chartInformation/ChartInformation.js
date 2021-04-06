import React from "react";
import "./chartInformation.scss";

export default function ChartInformation({ category, data }) {
  /*
  Number of residents in switzerland at the end of 2019.
  https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung.html
  */
  const RESIDENTSINSWITZERLAND = 8606033

  const categoryString = category.toString() + "Cumulative";

  const dailyDifference =
    data[data.length - 1][categoryString] -
    data[data.length - 2][categoryString];

  const filteredDifference =
    data[data.length - 1][categoryString] -
    data[0][categoryString];

  const per100kResidents = () => {
    const value = filteredDifference / (RESIDENTSINSWITZERLAND / 100000);
    return value.toFixed(2);
  }

  return (
    <div className="chart-information-wrapper">
      <div className="difference-wrapper">
        <p>Differenz zum Vortag</p>
        <p>{dailyDifference}</p>
      </div>

      <div className="difference-wrapper">
        <p>{`Total seit ${data[0].date}`}</p>
        <p>{filteredDifference}</p>
      </div>

      <div className="difference-wrapper">
        <p>Pro 100'000 Einwohner/innen</p>
        <p>{per100kResidents()}</p>
      </div>
    </div>
  );
}