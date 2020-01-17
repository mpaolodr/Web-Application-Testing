import { ballValue, strikeValue, hitBtn, foulBtn } from "./helpers";

describe("Button Functionality", () => {
  test("Add Value To Ball", () => {
    expect(ballValue("", "")).toEqual({ ball: "⚾" });
    expect(ballValue("x", "")).toEqual({ ball: "⚾" });
    expect(ballValue("x", "⚾")).toEqual({ ball: "⚾⚾" });
    expect(ballValue("x", "⚾⚾")).toEqual({ ball: "⚾⚾⚾" });
    expect(ballValue("x", "⚾⚾⚾")).toEqual({ ball: "", strike: "" });
    expect(ballValue("xx", "")).toEqual({ ball: "⚾" });
    expect(ballValue("xx", "⚾")).toEqual({ ball: "⚾⚾" });
    expect(ballValue("xx", "⚾⚾")).toEqual({ ball: "⚾⚾⚾" });
    expect(ballValue("xx", "⚾⚾⚾")).toEqual({ ball: "", strike: "" });
    expect(ballValue("xxx", "")).toEqual({ ball: "", strike: "" });
    expect(ballValue("xxx", "⚾")).toEqual({ ball: "", strike: "" });
    expect(ballValue("xxx", "⚾⚾")).toEqual({ ball: "", strike: "" });
    expect(ballValue("xxx", "⚾⚾⚾")).toEqual({ ball: "", strike: "" });
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
