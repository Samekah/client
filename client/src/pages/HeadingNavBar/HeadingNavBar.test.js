import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeadingNavBar from ".";

describe("Header", () => {
  test("it renders a nav tag", () => {
    render(<HeadingNavBar />, { wrapper: MemoryRouter });
    const nav = screen.queryByRole("navigation");
    expect(nav).toBeInTheDocument();
  });
});
