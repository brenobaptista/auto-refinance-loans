import React from "react";
import { render } from "@testing-library/react";
import Congratulations from "./index";

test("matches snapshot", () => {
  const { asFragment } = render(<Congratulations />);

  expect(asFragment()).toMatchSnapshot();
});
