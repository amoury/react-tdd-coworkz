import React from "react";

import { Card, CardContent } from "@material-ui/core";
import { header2, textStyle } from "../../../../variables";




const SingleSpaceOverview = ({ overview }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: "1" }}>
        <h2 style={header2}>Overview</h2>
        <p style={textStyle}>
          { overview ? overview : null }
        </p>
      </div>
      <Card style={{ overflow: "unset", minWidth: "25%", marginLeft: "5px"}}>
        <CardContent>
          <h2 style={header2}>Key Info</h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleSpaceOverview;
