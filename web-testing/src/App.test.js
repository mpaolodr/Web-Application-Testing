import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
});

describe("Count displays", () => {
  test("ball count display", () => {
    const { getByTestId } = render(<App />);
    console.log(getByTestId("ball-count"));
  });

  test("strike count display", () => {
    const { getByTestId } = render(<App />);
    getByTestId("strike-count");
  });
});
