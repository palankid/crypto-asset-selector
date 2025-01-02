import { formatCurrency, formatPercentage } from "@/utils/formatters";
import { twJoin } from "tailwind-merge";

interface PriceDisplayProps {
  price: number;
  label?: string;
  change?: number;
}

const PriceDisplay = ({ label, price, change }: PriceDisplayProps) => {
  return (
    <div className="flex flex-col items-end">
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
        {formatCurrency(price, { precision: 2 })}
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
