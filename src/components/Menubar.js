import { useState } from "react";
import "./Menubar.css";

import menus from "./db.json";
const Menubar = () => {
  console.log(menus);

  return (
    <div className=" menubar  d-flex justify-content-center text-center py-3">
      {menus.map((menu) => (
        <div className="nav d-block me-5 " key={menu.id}>
          <i className="fa-solid fa-gears "></i>
          <p>{menu.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Menubar;
