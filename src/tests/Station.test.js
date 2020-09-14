import Point from "../components/Point";
import Station from "../components/Station";

it("Station properties set correctly", () => {
  const location = new Point(10, 0);
  const station = new Station(location, 12);

  expect(station.Location.X).toEqual(10);
  expect(station.Location.Y).toEqual(0);
  expect(station.Reach).toEqual(12);
});

it("Station distance from point calculated correctly", () => {
  const point = new Point(12, 0);

  const location = new Point(10, 0);
  const station = new Station(location, 12);

  const distance = station.getDistance(point);

  expect(distance).toEqual(2);
});

it("Station power from point calculated correctly", () => {
  const point = new Point(12, 0);

  const location = new Point(10, 0);
  const station = new Station(location, 12);

  const power = station.getPower(point);

  expect(power).toEqual(100);
});
