import { expect, test, describe } from "vitest";

import { formatCurrency, formatPercentage, NO_VALUE } from "./formatters";

describe("formatCurrency", () => {
  test("formats number to USD currency with default precision", () => {
    expect(formatCurrency(1234.56)).toBe("$1,235");
  });

  test("formats number to USD currency with specified precision", () => {
    expect(formatCurrency(1234.56, { precision: 2 })).toBe("$1,234.56");
  });

  test("returns empty string for NaN input", () => {
    expect(formatCurrency(NaN)).toBe(NO_VALUE);
  });
});

describe("formatPercentage", () => {
  test("formats number to percentage with default precision", () => {
    expect(formatPercentage(12.345)).toBe("+12%");
  });

  test("formats number to percentage with specified precision", () => {
    expect(formatPercentage(12.345, 2)).toBe("+12.35%");
  });

  test("formats negative number to percentage", () => {
    expect(formatPercentage(-12.345, 2)).toBe("-12.35%");
  });

  test("formats zero to percentage", () => {
    expect(formatPercentage(0)).toBe("0%");
  });

  test("returns empty string for NaN input", () => {
    expect(formatPercentage(NaN)).toBe(NO_VALUE);
  });
});
