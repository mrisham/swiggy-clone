import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("is heading fully loaded", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("is button  fully loaded", () => {
  render(<Contact />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
test("is 2placeholders  fully loaded", () => {
  render(<Contact />);
  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);
});
