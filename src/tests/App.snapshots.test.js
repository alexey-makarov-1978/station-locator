import React from "react";
import App from "../App";
import renderer from "react-test-renderer";
import { Points } from "../components/Constants";

it("App matching snapshot for root component", () => {
  const tree = renderer.create(<App points={Points} />);
  expect(tree).toMatchSnapshot();
});
