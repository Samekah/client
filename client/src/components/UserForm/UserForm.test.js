import UserForm from ".";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("SearchForm layout", () => {

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

describe("SearchForm", () =>{
  
  let initState;
  
  beforeEach(()=>{
    initState = {
      loading: false,
      questionIndex: 0,
      username: "",
      category: "",
      difficulty: "",
      result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
      score: 0,
      userNum: 0,
    };
  })

  test('it renders a form with no users in state', () => {
    renderWithReduxProvider(<UserForm />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('it renders a form with a question Index of 0 in state', () => {
    renderWithReduxProvider(<UserForm />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('it renders a form with no ites in the results array in state', () => {
    renderWithReduxProvider(<UserForm />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  test('it renders a form with a value of 0 in state', () => {
    renderWithReduxProvider(<UserForm />, { initState });
    let form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });

  
  test("it renders the form div", () => {
    renderWithReduxProvider(<UserForm />);
    const formDiv = screen.getByRole("formContainer");
    expect(formDiv).toBeInTheDocument();
  });

  test("it renders the username field", () => {
    renderWithReduxProvider(<UserForm />);
    const usernameTextbox = screen.getByRole("username");
    expect(usernameTextbox).toBeInTheDocument();
  });

  test("it renders the category drop down menu", () => {
    renderWithReduxProvider(<UserForm />);
    const categoryDropDown = screen.getByRole("categoryDropDown");
    expect(categoryDropDown).toBeInTheDocument();
  });

  test("it renders the difficulty drop down menu", () => {
    renderWithReduxProvider(<UserForm />);
    const diffDropDown = screen.getByRole("diffDropDown");
    expect(diffDropDown).toBeInTheDocument();
  });

})
