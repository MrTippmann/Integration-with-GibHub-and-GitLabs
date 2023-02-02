import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./Pages/Home";
import renderer from "react-test-renderer";

jest.mock("./");

// Testing if Dictionary component renders correctly
test("renders correctly", () => {
  const tree = renderer
    .create(<Home page="http://localhost:3000/"></Home>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Testing that first page has header
test("Header loads correctly", () => {
  render(<App />);
  expect(screen.getByText("GitHub and GitLab users")).toBeInTheDocument();
});

fetch(
  `/api/gitlab-users/MrTippmann`
)

// Suppose to give a runtime error
test('id is id:91426696', done => {
  function callback(error, data) {
    if (error) {
      done(error);
      return;
    }
    try {
      expect(data.id).toBe('id:91426696');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetch(callback);
});