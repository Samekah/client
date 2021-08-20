import UserForm from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SearchForm", () => {
  beforeEach(() => {
    renderWithReduxProvider(<UserForm />);
  });
  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  test("Placeholder text exists", () => {
    let placeHolderInput = screen.getByPlaceholderText("Enter Username");
    expect(placeHolderInput).toBeInTheDocument();
  });
  test("Username label exists", () => {
    let usernameInput = screen.getByLabelText("Username:");
    expect(usernameInput).toBeInTheDocument();
  });
  test("Difficult Label exists", () => {
    let difficultyInput = screen.getByLabelText("Category:");
    expect(difficultyInput).toBeInTheDocument();
  });
  test("Category Label exists", () => {
    let categoryInput = screen.getByLabelText("Difficulty:");
    expect(categoryInput).toBeInTheDocument();
  });
  test("Selected option for category", () => {
    let selectElement = screen.getByDisplayValue("Choose a Category...");
    expect(selectElement).toBeInTheDocument();
  });
  test("Selected option for difficulty", () => {
    let selectElement = screen.getByDisplayValue("Choose a Difficulty");
    expect(selectElement).toBeInTheDocument();
  });
  test("it displays logo", () => {
    expect(screen.getByAltText("Quizzo Logo")).toBeInTheDocument();
  });

  test("it displays the 'New Game'button", () => {
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });
});
