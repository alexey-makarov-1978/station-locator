import { Stations } from "./Constants";

// locates the most suitable station
export default function GetSuitableStation(point) {
  // calculates the station with max power
  const station = Stations.reduce((res, station) => {
    return res.getPower(point) >= station.getPower(point) ? res : station;
  });

  const power = station.getPower(point);

  // returns both power and station.
  // if power equals 0 that means the station in fact is not valid
  // so we return null
  return { station: power === 0 ? null : station, power };
}
