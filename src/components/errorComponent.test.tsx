import { render, fireEvent } from "@testing-library/react";
import ErrorComponent from "./ErrorComponent";

describe("ErrorComponent", () => {
    it("should render the error message", () => {
        const {getByText} =  render(<ErrorComponent message="Error" />);
        expect(getByText("Error")).toBeInTheDocument();
    }
    );
});