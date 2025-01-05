import React, { useEffect, useState } from "react";
import { twJoin } from "tailwind-merge";

import { AssetSelectItem } from "../types";
import Option from "./Option";
import RowLayout from "./RowLayout";

interface DropdownMenuProps {
  options: AssetSelectItem[];
  selected: AssetSelectItem | null;
  opened: boolean;
  onSelect: (item: AssetSelectItem) => void;
}

const DropdownMenu = ({
  options,
  selected,
  opened,
  onSelect,
}: DropdownMenuProps) => {
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
                isSelected={selected?.assetId === option.assetId}
                key={option.assetId}
                onClick={onSelect}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const areEqual = (
  prevProps: DropdownMenuProps,
  nextProps: DropdownMenuProps,
) => {
  return (
    prevProps.options.every((item, index) => {
      const otherItem = nextProps.options[index];
      return (
        item.assetId === otherItem.assetId &&
        item.lastPrice === otherItem.lastPrice &&
        item.change === otherItem.change
      );
    }) && prevProps.opened === nextProps.opened
  );
};

export default React.memo(DropdownMenu, areEqual);
