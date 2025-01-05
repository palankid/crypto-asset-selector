import { twJoin } from "tailwind-merge";

interface PriceWidgetProps {
  price: string;
  label?: string;
  change?: string;
  changeValue?: number;
}

const PriceWidget = ({
  price,
  label,
  change,
  changeValue = 0,
}: PriceWidgetProps) => {
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
        {price}
      </span>
      {change && (
        <span
          className={twJoin(
            "text-2xs",
            changeValue < 0 ? "text-bid" : "text-ask",
          )}
        >
          {change}
        </span>
      )}
    </div>
  );
};

export default PriceWidget;
