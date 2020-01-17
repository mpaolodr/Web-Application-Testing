import { ballValue, strikeValue, hitBtn, foulBtn } from "./helpers";

describe("Button Functionality", () => {
  test("Add Value To Ball", () => {
    expect(ballValue("", "")).toEqual({ ball: "⚾" });
  });

  test("Add Value To Strike", () => {
    expect(strikeValue("", "")).toEqual({ strike: "x" });
  });

  test("Rest Strike and Ball Values", () => {
    expect(hitBtn()).toEqual({ ball: "", strike: "" });
  });

  test("Add to strike if strike is not 2", () => {
    expect(foulBtn("")).toEqual({ strike: "x" });
  });
});
