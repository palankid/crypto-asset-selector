import { SelectItem } from "./types";

interface OptionProps {
  children: React.ReactNode;
  item: SelectItem;
  onClick: (item: SelectItem) => void;
}

const Option = ({ children, item, onClick }: OptionProps) => {
  function handleClick() {
    onClick(item);
  }

  return (
    <li
      className="p-3 pr-10 text-primary hover:bg-slate-200"
      onClick={handleClick}
    >
      {children}
    </li>
  );
};

export default Option;
