import { AssetSelect } from "@/components/AssetSelect";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  selectRatesData,
  selectSelectedAssetId,
} from "./store/rates.selectors";
import { CryptoAssetId } from "@/definitions/types";
import { changeSelectedAssetId } from "./store/rates.slice";

const RatesPage = () => {
  const dispatch = useAppDispatch();
  const options = useAppSelector(selectRatesData);
  const selectedAssetId = useAppSelector(selectSelectedAssetId);

  const handleSelect = (assetId: CryptoAssetId) => {
    dispatch(changeSelectedAssetId(assetId));
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <AssetSelect
        options={options}
        selected={selectedAssetId}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default RatesPage;
