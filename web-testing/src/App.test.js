import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
});

describe("Count displays", () => {
  test("ball count display", () => {
    const { getByTestId } = render(<App />);
    getByTestId("ball-count");
  });

  test("strike count display", () => {
    const { getByTestId } = render(<App />);
    getByTestId("strike-count");
  });
});

describe("Label for counts", () => {
  test("Label for ball", () => {
    const { getByTestId } = render(<App />);
    getByTestId("label-ball");
  });

  test("Label for strike", () => {
    const { getByTestId } = render(<App />);
    getByTestId("label-strike");
  });
});
