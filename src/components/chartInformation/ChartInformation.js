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
      <div>
        <p>Differenz zum Vortag</p>
        <p className="value">{dailyDifference}</p>
      </div>

      <div>
        <p>{`Total seit ${data[0].date}`}</p>
        <p className="value">{filteredDifference}</p>
      </div>

      <div>
        <p>Pro 100'000 Einwohner/innen</p>
        <p className="value">{per100kResidents()}</p>
      </div>
    </div>
  );
}