import { fireEvent, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { useClickOutside } from "./useClickOutside";

describe("useClickOutside", () => {
  test("should call the callback when clicking outside the element", () => {
    const callback = vi.fn();
    const ref = { current: document.createElement("div") };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, callback));

    // Simulate click outside
    fireEvent.click(document.body);

    expect(callback).toHaveBeenCalled();
  });

  test("should not call the callback when clicking inside the element", () => {
    const callback = vi.fn();
    const ref = { current: document.createElement("div") };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, callback));

    // Simulate click inside
    fireEvent.click(ref.current);

    expect(callback).not.toHaveBeenCalled();
  });
});
