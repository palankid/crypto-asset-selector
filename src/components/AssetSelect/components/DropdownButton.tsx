import React from "react";
import { twJoin, twMerge } from "tailwind-merge";

import ArrowIcon from "@/components/Icons/common/ArrowIcon";
import { Asset } from "@/components/Asset";
import { PriceWidget } from "@/components/PriceWidget";
import CrossfadeTransition from "./CrossfadeTransition";
import { AssetSelectItem } from "../types";
import RowLayout from "./RowLayout";

export interface DropdownButtonProps {
  selected: boolean;
  selectedItem?: AssetSelectItem | null;
  placeholder?: string;
  onClick: () => void;
}

const DropdownButton = ({
  selected,
  selectedItem = null,
  placeholder,
  onClick,
}: DropdownButtonProps) => {
  return (
    <button
      className={twJoin(
        "group w-full rounded p-px",
        "bg-[linear-gradient(35deg,_#3550fdb3_3%,_#00000000_12%),_linear-gradient(144deg,_#f236dfe6_2%,_#00000000_34%)]",
      )}
      role="button"
      onClick={onClick}
    >
      <RowLayout
        iconComponent={
          <ArrowIcon
            className={twMerge(
              selected ? "rotate-180" : "",
              "ml-auto text-secondary transition duration-500 group-hover:text-white",
            )}
            width={12}
            height={12}
          />
        }
        className="h-full w-full rounded bg-buttonfill py-[11px] text-primary transition duration-500 group-hover:bg-buttonhover group-hover:bg-opacity-60"
      >
        {!selectedItem && placeholder}
        {selectedItem && (
          <>
            <CrossfadeTransition>
              <Asset
                assetId={selectedItem.assetId}
                label={selectedItem.label}
                description={selectedItem.description}
                iconClassName="text-primary"
              />
            </CrossfadeTransition>
            <CrossfadeTransition>
              <PriceWidget
                price={selectedItem.lastPrice}
                label="Last Market Price"
              />
            </CrossfadeTransition>
          </>
        )}
      </RowLayout>
    </button>
  );
};

const areEqual = (
  prevProps: DropdownButtonProps,
  nextProps: DropdownButtonProps,
) => {
  return (
    prevProps.selectedItem?.assetId === nextProps.selectedItem?.assetId &&
    prevProps.selectedItem?.lastPrice === nextProps.selectedItem?.lastPrice &&
    prevProps.selected === nextProps.selected
  );
};

export default React.memo(DropdownButton, areEqual);
