import Leaderboard from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Renders leaderboard", () => {
  test("it renders a div", () => {
    renderWithReduxProvider(<Leaderboard />);
    const div = screen.getByRole("leaderboard");
    expect(div).toBeInTheDocument();
  });
});
