import { formatCurrency, formatPercentage } from "@/utils/formatters";
import { twJoin } from "tailwind-merge";

interface PriceDisplayProps {
  price: number;
  label?: string;
  change?: number;
  precision?: number;
}

const PriceDisplay = ({
  price,
  change,
  label,
  precision = 2,
}: PriceDisplayProps) => {
  return (
    <div
      className={twJoin("flex flex-col items-end", label ? "gap-1" : "gap-0.5")}
    >
      {label && (
        <span className="font-inter text-2xs uppercase text-secondary">
          {label}
        </span>
      )}
      <span
        className={twJoin(
          "text-sm text-primary",
          label ? "font-aeonikpro" : "",
        )}
      >
        {formatCurrency(price, { precision })}
      </span>
      {change && (
        <span
          className={twJoin("text-2xs", change < 0 ? "text-bid" : "text-ask")}
        >
          {formatPercentage(change, 2)}
        </span>
      )}
    </div>
  );
};

export default PriceDisplay;
