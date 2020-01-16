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

describe("Buttons are rendering", () => {
  test("Add Ball Btn", () => {
    const { getByTestId } = render(<App />);
    getByTestId("ball-btn");
  });

  test("Add Strike Btn", () => {
    const { getByTestId } = render(<App />);
    getByTestId("strike-btn");
  });

  test("Foul Btn", () => {
    const { getByText } = render(<App />);
    getByText(/foul/i);
  });

  test("Hit Btn", () => {
    const { getByText } = render(<App />);
    getByText(/hit/i);
  });
});
