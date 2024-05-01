import React from "react";

function GaugeBar({ view, positive, negative }) {
  let totalVotes = positive + negative;
  let totalPositives = ((positive / totalVotes) * 100).toFixed(1);
  let totalNegatives = ((negative / totalVotes) * 100).toFixed(1);
  let viewList = view !== "Lista" ? true : false;
  return (
    <div className={`GaugeBar ${viewList && "barHeight"}`}>
      <div className="greenBar" style={{ width: `${totalPositives}%` }}>
        <div className="barcontent greenBarcontent">
          <img
            src="./img/thumbs-up.svg"
            alt="thumbs up"
            width={viewList ? "15" : "24"}
          />
          <p className={`barText ${viewList && "barGridText"}`}>
            {totalPositives}%
          </p>
        </div>
      </div>
      <div className="yellowBar" style={{ width: `${totalNegatives}%` }}>
        <div className="barcontent yellowBarcontent">
          <p className={`barText ${viewList && "barGridText"}`}>
            {totalNegatives}%
          </p>
          <img
            src="./img/thumbs-down.svg"
            alt="thumbs down"
            width={viewList ? "15" : "24"}
          />
        </div>
      </div>
    </div>
  );
}

export default GaugeBar;
