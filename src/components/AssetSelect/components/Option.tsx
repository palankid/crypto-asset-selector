import { twJoin, twMerge } from "tailwind-merge";
import { Asset } from "../../Asset";
import { CheckmarkIcon } from "../../Icons";
import { PriceDisplay } from "../../PriceDisplay";
import RowLayout from "./RowLayout";
import { AssetSelectItem } from "../types";

interface OptionProps {
  option: AssetSelectItem;
  isSelected: boolean;
  onClick: (item: AssetSelectItem) => void;
}

const Option = ({ option, isSelected, onClick }: OptionProps) => {
  return (
    <li
      className={twMerge(
        "group cursor-pointer bg-buttonfill text-primary hover:bg-buttonhover",
        isSelected && "pointer-events-none",
      )}
      onClick={() => !isSelected && onClick(option)}
    >
      <RowLayout
        className="bg-buttonfill text-secondary"
        iconComponent={
          <CheckmarkIcon
            width={14}
            height={14}
            className={twJoin(
              "ml-auto text-primary transition-opacity duration-500",
              isSelected ? "opacity-100" : "opacity-0",
            )}
          />
        }
      >
        <Asset
          assetId={option.assetId}
          label={option.label}
          iconClassName="group-hover:text-primary transition-colors duration-500"
        />
        <PriceDisplay price={option.lastPrice} change={option.change} />
      </RowLayout>
    </li>
  );
};

export default Option;
