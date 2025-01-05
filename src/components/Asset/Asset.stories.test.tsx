import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import * as stories from "./Asset.stories";

const { WithDescription, WithoutDescription } = composeStories(stories);

describe("Asset component", () => {
  it("WithDescription", () => {
    render(<WithDescription />);

    expect(screen.getByTestId("bitcoin-icon")).toBeInTheDocument();
    expect(screen.getByText("BTC-Options")).toBeInTheDocument();
    expect(screen.getByText("Option Contracts")).toBeInTheDocument();
  });

  it("WithoutDescription", () => {
    render(<WithoutDescription />);

    expect(screen.queryByText("Option Contracts")).not.toBeInTheDocument();
  });
});
