import { render, screen } from "@testing-library/react";
import App from "../App";

const RollDiceMock = () => <div>Mock RollDice</div>;
jest.mock("../RollDice", () => RollDiceMock);

test("should render <App /> component", () => {
  render(<App />);
  expect(screen.getByText("Mock RollDice")).toBeInTheDocument();
});
