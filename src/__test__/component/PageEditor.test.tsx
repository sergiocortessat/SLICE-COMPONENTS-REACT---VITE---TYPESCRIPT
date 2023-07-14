import { render, fireEvent } from "@testing-library/react";
import PageBuilder from "../../components/PageEditor";

test("renders the PageBuilder component", () => {
  const { getByText } = render(<PageBuilder />);

  // Assert that the "Your Slices" heading is rendered
  expect(getByText("Your Slices")).toBeInTheDocument();

  // Assert that the "Add Slices" heading is rendered
  expect(getByText("Add Slices")).toBeInTheDocument();

  // Add a hero slice
  fireEvent.click(getByText("Hero"));

  // Add the article slice
  fireEvent.click(getByText("Article"));

  // Add the price slice
  fireEvent.click(getByText("Price"));
});
