import {
  render,
  fireEvent,
  screen,
} from "@testing-library/react";
import PageBuilder from "./PageEditor";

describe("HomePageBuilder", () => {
  beforeEach(() => {
    render(<PageBuilder />);
    fireEvent.click(screen.getByTestId("Hero"));
    fireEvent.click(screen.getByTestId("Article"));
    fireEvent.click(screen.getByTestId("Price"));
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("renders the PageBuilder component", () => {
    // Assert that the "Your Slices" heading is rendered
    expect(screen.getByText("Your Slices")).toBeInTheDocument();

    // Assert that the "Add Slices" heading is rendered
    expect(screen.getByText("Add Slices")).toBeInTheDocument();
  });

  test("checks content removed", () => {
    const removeButtons = screen.getAllByTestId("remove-button");
    // console.log('removeButtons', removeButtons);
    expect(removeButtons).toHaveLength(3);

    // screen.debug(undefined, Infinity);

    removeButtons.forEach((button) => {
      fireEvent.click(button);
    });
    expect(screen.queryByTestId("remove-button")).toBeNull();
  });

  test("checks articleSlice content being saved", () => {
    const titleInput = screen.getByTestId("article-title");
    const subtitleInput = screen.getByTestId("article-content");
    const colorSelect = screen.getByTestId("article-color");

    fireEvent.change(titleInput, { target: { value: "" } });
    fireEvent.change(subtitleInput, { target: { value: "" } });
    fireEvent.change(colorSelect, { target: { value: "" } });

    expect(titleInput).toHaveValue("");
    expect(subtitleInput).toHaveValue("");
    expect(colorSelect).toHaveValue("red");

    fireEvent.change(titleInput, { target: { value: "Test title" } });
    fireEvent.change(subtitleInput, { target: { value: "Test Content" } });
    fireEvent.change(colorSelect, { target: { value: "green" } });

    // screen.debug(undefined, Infinity);
    expect(titleInput).toHaveValue("Test title");
    expect(subtitleInput).toHaveValue("Test Content");
    expect(colorSelect).toHaveValue("green");
  });

  test("checks priceSlice content being saved", () => {
    const titleInput = screen.getByTestId("price-title");
    const subtitleInput = screen.getByTestId("price-price");

    fireEvent.change(titleInput, { target: { value: "" } });
    fireEvent.change(subtitleInput, { target: { value: "" } });

    expect(titleInput).toHaveValue("");
    expect(subtitleInput).toHaveValue(null);

    fireEvent.change(titleInput, { target: { value: "Test title" } });
    fireEvent.change(subtitleInput, { target: { value: 2 } });

    expect(titleInput).toHaveValue("Test title");
    expect(subtitleInput).toHaveValue(2);
  });

  test("checks heroSlice content being saved", () => {
    const titleInput = screen.getByTestId("hero-title");
    const subtitleInput = screen.getByTestId("hero-subtitle");

    // check that the input fields are empty an error is displayed
    fireEvent.change(titleInput, { target: { value: "" } });
    fireEvent.change(subtitleInput, { target: { value: "" } });

    // screen.debug(undefined, Infinity);

    expect(titleInput).toHaveValue("");
    expect(subtitleInput).toHaveValue("");

    fireEvent.change(titleInput, { target: { value: "Test title" } });
    fireEvent.change(subtitleInput, { target: { value: "Test Content" } });

    expect(titleInput).toHaveValue("Test title");
    expect(subtitleInput).toHaveValue("Test Content");
  });
});
