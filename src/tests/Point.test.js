import Point from "../components/Point";

it("Point properties set correctly", () => {
  const point = new Point(100, 10);
  expect(point.X).toEqual(100);
  expect(point.Y).toEqual(10);
});
