import React from "react";
import {Outlet} from "react-router-dom";


const Blank = () => {
  return (
    <>
        <div>blank</div>
      <Outlet />
    </>
  );
};

export default Blank;