import { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";

import { AssetSelectItem } from "../types";
import Option from "./Option";
import RowLayout from "./RowLayout";

interface DropdownProps {
  options: AssetSelectItem[];
  selected: AssetSelectItem | null;
  opened: boolean;
  onSelect: (item: AssetSelectItem) => void;
}

const Dropdown = ({ options, selected, opened, onSelect }: DropdownProps) => {
  const [shouldShow, setShouldShow] = useState(opened);

  useEffect(() => {
    if (!opened) return;

    setShouldShow(true);
  }, [opened]);

  const handleTransitionEnd = () => {
    if (opened) return;

    setShouldShow(false);
  };

  return (
    <div
      className={twJoin(
        opened ? "opacity-100" : "opacity-0",
        "relative -top-1 transition-opacity duration-500",
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      {shouldShow && (
        <div className="absolute flex w-full flex-col divide-y divide-divstroke rounded-b border border-divstroke shadow-custom">
          <RowLayout className="bg-buttonfill py-2.5 text-secondary">
            <span className="text-xs">Market</span>
            <span className="text-xs">Price</span>
          </RowLayout>
          <ul className="divide-y divide-divstroke">
            {options?.map((option) => (
              <Option
                option={option}
                isSelected={selected?.symbol === option.symbol}
                key={option.symbol}
                onClick={onSelect}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
