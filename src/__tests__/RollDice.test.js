import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RollDice from "../RollDice";

const DieMock = ({ num }) => <div>{num}</div>;
jest.mock("../Die", () => DieMock);

test("should render <RollDice /> component", () => {
  render(<RollDice />);
  expect(screen.getAllByText("six")).toHaveLength(2);
  expect(screen.getByText(/roll dice/i)).toBeInTheDocument();
});

test("should update state on button click", async () => {
  render(<RollDice />);

  let button = screen.getByText(/roll dice/i);

  // Clicking the button updates the button text to rolling
  await userEvent.click(button);
  expect(button).toHaveTextContent(/rolling/i);

  // Wait for animation to complete & button text to go back to roll dice
  await waitFor(() => expect(button).toHaveTextContent(/roll dice/i), {
    timeout: 1000, // this is indeed the default value
  });
});
