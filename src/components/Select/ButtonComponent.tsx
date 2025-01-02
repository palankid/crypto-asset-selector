import { twJoin } from "tailwind-merge";
import ArrowIcon from "../Icons/common/ArrowIcon";
import { ParallelTransition } from "../Transitions";
import { SelectItem } from "./types";
import { Asset } from "../Asset";
import { PriceDisplay } from "../PriceDisplay";

export interface ButtonComponentProps {
  selected: boolean;
  selectedItem?: SelectItem | null;
  placeholder?: string;
  onClick: () => void;
}

const ButtonComponent = ({
  selected,
  selectedItem = null,
  placeholder,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button
      className={twJoin(
        "radius-2 group h-[51px] w-[405px] rounded p-px",
        "bg-[linear-gradient(35deg,_#3550fdb3_3%,_#00000000_12%),_linear-gradient(144deg,_#f236dfe6_2%,_#00000000_34%)]",
      )}
      onClick={onClick}
    >
      <div className="flex h-full w-full items-center justify-between rounded bg-black px-3 py-2 text-primary transition duration-500 group-hover:bg-opacity-60">
        <ParallelTransition>
          {!selectedItem && <span className="text-sm">{placeholder}</span>}
          {selectedItem && (
            <div className="flex w-full items-start justify-between">
              <Asset
                symbol={selectedItem.value}
                label={selectedItem.label}
                description={selectedItem.description}
                iconClassName="text-primary"
              />
              <PriceDisplay
                price={selectedItem.lastPrice}
                label="Last Market Price"
              />
            </div>
          )}
        </ParallelTransition>
        <ArrowIcon
          className={twJoin(
            selected ? "rotate-180" : "",
            "ml-auto text-secondary transition duration-500 group-hover:text-white",
          )}
          width={10}
          height={10}
        />
      </div>
    </button>
  );
};

export default ButtonComponent;
