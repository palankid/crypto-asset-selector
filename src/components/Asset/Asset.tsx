import { CryptoAssetId } from "@/definitions/types";
import * as Icons from "../Icons";
import { twMerge } from "tailwind-merge";

interface AssetProps {
  assetId: CryptoAssetId;
  label: string;
  description?: string;
  iconClassName?: string;
}

const Asset = ({
  assetId,
  label,
  description,
  iconClassName = "",
}: AssetProps) => {
  const IconComponent = Icons[assetId];

  return (
    <div className="flex items-center justify-start gap-3">
      <IconComponent
        className={twMerge("text-secondary", iconClassName)}
        width={18}
        height={18}
      />
      <div className="flex flex-col items-start gap-1 uppercase">
        <span className="font-spacegrotesk text-sm text-primary">{label}</span>
        {description && (
          <span className="text-2xs font-medium text-secondary">
            {description}
          </span>
        )}
      </div>
    </div>
  );
};

export default Asset;
