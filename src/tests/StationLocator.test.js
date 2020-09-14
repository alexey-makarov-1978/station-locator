import SuitableStation from "../components/StationLocator";
import Point from "../components/Point";

it("StationLocator correctly locates the most suitable station", () => {
  const point = new Point(0, 0);

  const { station, power } = SuitableStation(point);

  expect(station.Location.X).toEqual(0);
  expect(station.Location.Y).toEqual(0);
  expect(station.Reach).toEqual(10);

  expect(power).toEqual(100);
});

it("StationLocator doesnt locate the most suitable station", () => {
  const point = new Point(100, 100);

  const { station } = SuitableStation(point);

  expect(station).toBeNull();
});
