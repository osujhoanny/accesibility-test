import React, { useState } from "react";
import Card from "../page/card";
import Dropdown from "./dropdown";
import data from "../assets/data.json";

function CardContainer() {
  const [grid, setGrid] = useState("Lista");

  const changeGrid = (value) => {
    setGrid(value);
  };

  return (
    <>
      <div className="previousContainer">
        <p className="previousText">Votaciones Previas</p>
        <Dropdown changeGrid={changeGrid} grid={grid} />
      </div>
      <div className="FullWidth">
        {data.data.map((data, index) => (
          <Card data={data} key={index} view={grid} />
        ))} 
      </div>
    </>
  );
}

export default CardContainer;
