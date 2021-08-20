import React from "react";

import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import questionReducer from "../reducers/questionReducer";

const TestProviders = ({ initState }) => {
  initState ||= {
    loading: false,
    questionIndex: 0,
    username: "polina",
    category: "",
    difficulty: "easy",
    result: [{ question: "", correctAnswer: "", incorrectAnswers: [] }],
    score: 0,
    userNum: 0,
  };
  let testReducer = () => questionReducer(initState, { type: "@@INIT" });
  const testStore = createStore(testReducer, applyMiddleware(thunk));

  return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithReduxProvider = (ui, options = {}) => {
  let TestWrapper = TestProviders(options);
  render(ui, { wrapper: TestWrapper, ...options });
};

import axios from "axios";
jest.mock("axios");
axios.get.mockResolvedValue({ data: [{ latlng: [123, 456] }] });

global.renderWithReduxProvider = renderWithReduxProvider;
global.React = React;
global.render = render;
global.userEvent = userEvent;
