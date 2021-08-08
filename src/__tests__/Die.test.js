import { render, screen } from "@testing-library/react";
import Die from "../Die";

test("should render <Die /> component", () => {
  render(<Die num="one" />);
  expect(screen.getByTestId("die")).toBeInTheDocument();
});

test("should have class 'fa-dice-one'", () => {
  render(<Die num="one" />);
  expect(screen.getByTestId("die")).toHaveClass("fa-dice-one");
});

test("should have class 'Die-shake'", () => {
  render(<Die num="one" animate />);
  expect(screen.getByTestId("die")).toHaveClass("Die-shake");
});

test("should not have class 'Die-shake'", () => {
  render(<Die num="one" />);
  expect(screen.getByTestId("die")).not.toHaveClass("Die-shake");
});
