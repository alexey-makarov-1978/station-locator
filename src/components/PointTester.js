import React from "react";
import PropTypes from "prop-types";

import SuitableStation from "./StationLocator";

function PointTester({ point }) {
  // component checks suitable location for the passed point
  // if power = 0 station object doesnt contain data (null)
  const { station, power } = SuitableStation(point);

  return (
    <div>
      {power > 0
        ? `Best link station for point ${point.X}, ${point.Y} is ${
            station.Location.X
          }, ${station.Location.Y} with power ${power.toFixed(2)}`
        : `No link station within reach for point ${point.X}, ${point.Y}`}
    </div>
  );
}

PointTester.propTypes = {
  point: PropTypes.object.isRequired,
};

export default PointTester;
