"use client";

import { useCallback, useRef, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import Option from "./Option";
import { useClickOutside } from "@/hooks/useClickOutside";
import { SelectItem } from "./types";
import clsx from "clsx";

export interface SelectProps {
  items: SelectItem[];
  placeholder?: string;
  onSelect?: (item: SelectItem) => void;
}

const Select = ({
  items = [],
  placeholder = "Select an item",
  onSelect,
}: SelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SelectItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeSelect);

  function closeSelect() {
    setIsOpened(false);
  }

  const handleButtonClick = useCallback(() => {
    setIsOpened((prev) => (items?.length ? !prev : false));
  }, [items]);

  const handleItemClick = useCallback((item: SelectItem) => {
    setSelectedItem(item);
    onSelect?.(item);
    handleButtonClick();
  }, []);

  return (
    <div ref={ref} className="relative w-full min-w-96 select-none">
      <ButtonComponent selected={isOpened} onClick={handleButtonClick}>
        {selectedItem ? selectedItem.label : placeholder}
      </ButtonComponent>

      <div
        className={clsx([
          isOpened ? "block opacity-100" : "hidden opacity-0",
          "relative -top-px transition-opacity duration-500",
        ])}
      >
        <ul className="absolute flex w-full flex-col divide-y border border-secondary transition-opacity duration-500">
          {items?.map((item) => (
            <Option item={item} key={item.value} onClick={handleItemClick}>
              {item.label}
            </Option>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Select;
