import UserCount from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Renders leaderboard", () => {
  test("it renders a p tag", () => {
    renderWithReduxProvider(<UserCount />);
    const div = screen.getByRole("userCount");
    expect(div).toBeInTheDocument();
  });
});
