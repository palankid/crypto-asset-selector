import * as Icons from "../Icons";
import { twMerge } from "tailwind-merge";

interface AssetProps {
  symbol: keyof typeof Icons;
  label: string;
  description?: string;
  iconClassName?: string;
}

const Asset = ({
  symbol,
  label,
  description,
  iconClassName = "",
}: AssetProps) => {
  const IconComponent = Icons[symbol];

  return (
    <div className="flex items-center justify-center">
      <IconComponent
        className={twMerge("text-secondary", iconClassName)}
        width={18}
        height={18}
      />
      <div className="flex flex-col">
        <span className="ml-2 font-spacegrotesk text-sm uppercase text-primary">
          {label}
        </span>
        <span className="ml-2 text-2xs font-medium uppercase text-secondary">
          {description}
        </span>
      </div>
    </div>
  );
};

export default Asset;
