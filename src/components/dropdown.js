import React, { useState } from "react";

function Dropdown({ grid, changeGrid }) {
  const [show, setShow] = useState(false);

  const showDropdown = () => {
    setShow(!show);
  };

  const changeView = (value) => {
    changeGrid(value);
    setShow(false);
  };

  return (
    <div className="dropdown">
      <button onClick={() => showDropdown()} className="btnDrop">
        {grid}
        <img src="./media/triangle.svg" alt="triangle" width="12" />
      </button>
      <div className={`dropdownContent ${show ? "show" : "hidden"}`}>
        <button onClick={() => changeView("Lista")}>Lista</button>
        <button onClick={() => changeView("Tarjetas")}>Tarjetas</button>
      </div>
    </div>
  );
}

export default Dropdown;
