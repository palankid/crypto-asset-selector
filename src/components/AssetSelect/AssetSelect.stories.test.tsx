import { render, screen, fireEvent } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./AssetSelect.stories";

const { NotSelected, Selected } = composeStories(stories);

describe("AssetSelect Component", () => {
  it("renders NotSelected story", () => {
    render(<NotSelected />);
    expect(screen.getByText("Select an item")).toBeInTheDocument();
  });

  it("renders Selected story", () => {
    render(<Selected />);
    expect(screen.queryByText("ETH-OPTIONS")).toBeInTheDocument();
    expect(screen.queryByText("3,264.11")).toBeInTheDocument();
    expect(screen.queryByText("BTC-OPTIONS")).not.toBeInTheDocument();
    expect(screen.queryByText("ARB-OPTIONS")).not.toBeInTheDocument();
  });

  it("opens and closes the dropdown", async () => {
    render(<NotSelected />);

    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    expect(screen.queryByText("BTC-OPTIONS")).toBeInTheDocument();
    expect(screen.queryByText("ETH-OPTIONS")).toBeInTheDocument();
    expect(screen.queryByText("ARB-OPTIONS")).toBeInTheDocument();

    fireEvent.click(dropdownButton);
    const dropdown = screen.getByTestId("dropdown-menu");
    fireEvent.transitionEnd(dropdown);

    expect(screen.queryByText("BTC-OPTIONS")).not.toBeInTheDocument();
    expect(screen.queryByText("ETH-OPTIONS")).not.toBeInTheDocument();
    expect(screen.queryByText("ARB-OPTIONS")).not.toBeInTheDocument();
  });

  it("selects an item from the dropdown list", async () => {
    render(<NotSelected />);

    const dropdownButton = screen.getByRole("button");
    fireEvent.click(dropdownButton);

    const ethOption = screen.getByText("ARB-OPTIONS");
    fireEvent.click(ethOption);
    const dropdown = screen.getByTestId("dropdown-menu");
    fireEvent.transitionEnd(dropdown);

    expect(screen.queryByText("ARB-OPTIONS")).toBeInTheDocument();
    expect(screen.queryByText("Select an item")).not.toBeInTheDocument();
    expect(screen.queryByText("ETH-OPTIONS")).not.toBeInTheDocument();
    expect(screen.queryByText("BTC-OPTIONS")).not.toBeInTheDocument();
  });
});
