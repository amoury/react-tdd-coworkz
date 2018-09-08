import React from 'react';
import LocationOn from "@material-ui/icons/LocationOn";
import Tooltip from "@material-ui/core/Tooltip";

const LocationMarker = ({name}) => {
  return (
    <Tooltip title={name} placement="top">
      <div>
        <LocationOn />
      </div>
    </Tooltip>
   
  )
}

export default LocationMarker
