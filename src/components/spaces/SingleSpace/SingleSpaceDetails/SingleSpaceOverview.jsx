import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { header2, textStyle } from "../../../../variables";

const SingleSpaceOverview = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flexGrow: "1" }}>
        <h2 style={header2}>Overview</h2>
        <p style={textStyle}>
          This is a great option for freelancers and startups with flexible
          schedules that are looking for an affordable space to work in. ​We
          founded Haushala Co-Working Space for people just like you: curious,
          hard working, sociable entrepreneurs. People who want to focus on
          creating great, innovative products and businesses without worrying
          about rent, electricity or running out of coffee.
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
