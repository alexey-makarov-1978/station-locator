import React from "react";
import PointTester from "../components/PointTester";
import renderer from "react-test-renderer";
import Point from "../components/Point";

const point1 = new Point(100, 100);
const point2 = new Point(0, 0);

it("PointTester renders no matching message for 100, 100", () => {
  const tree = renderer.create(<PointTester point={point1} />);
  expect(tree).toMatchSnapshot();
});

it("PointTester renders matching message for 0, 0", () => {
  const tree = renderer.create(<PointTester point={point2} />);
  expect(tree).toMatchSnapshot();
});
