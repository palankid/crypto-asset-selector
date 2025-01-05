import { AssetSelect } from "@/components/AssetSelect";
import { useAppSelector } from "@/store";
import { selectRatesData } from "./store/rates.selectors";

const RatesPage = () => {
  const options = useAppSelector(selectRatesData);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      <AssetSelect options={options} />
    </div>
  );
};

export default RatesPage;
