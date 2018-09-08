import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loader = () => {
  return (
    <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)"}}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
