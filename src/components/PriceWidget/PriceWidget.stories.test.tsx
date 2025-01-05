import { render, screen } from "@testing-library/react";
import { composeStories } from "@storybook/react";

import * as stories from "./PriceWidget.stories";

const { WithLabel, WithChangeIndicator, AllFeatures } = composeStories(stories);

describe("PriceWidget Stories", () => {
  test("renders WithLabel story", () => {
    render(<WithLabel />);

    expect(screen.getByText("Last market price")).toBeInTheDocument();
    expect(screen.getByText("101,200.45")).toBeInTheDocument();
  });

  test("renders WithChangeIndicator story", () => {
    render(<WithChangeIndicator />);

    expect(screen.getByText("3,412.45")).toBeInTheDocument();
    expect(screen.getByText("-2.45%")).toBeInTheDocument();
    expect(screen.getByText("1,234.56")).toBeInTheDocument();
    expect(screen.getByText("3.67%")).toBeInTheDocument();
  });

  test("renders AllFeatures story", () => {
    render(<AllFeatures />);

    expect(screen.getByText("All features")).toBeInTheDocument();
    expect(screen.getByText("101,200.45")).toBeInTheDocument();
    expect(screen.getByText("12.57%")).toBeInTheDocument();
  });
});
