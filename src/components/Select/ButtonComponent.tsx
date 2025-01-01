import clsx from "clsx";
import ArrowIcon from "../Icons/ArrowIcon";
import { ParallelTransition } from "../Transitions";

export interface ButtonComponentProps {
  children?: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

const ButtonComponent = ({
  selected,
  children,
  onClick,
}: ButtonComponentProps) => {
  return (
    <button
      className={clsx([
        "radius-2 group h-[51px] w-[405px] rounded p-px",
        "bg-[linear-gradient(35deg,_#3550fdb3_3%,_#00000000_12%),_linear-gradient(144deg,_#f236dfe6_2%,_#00000000_34%)]",
      ])}
      onClick={onClick}
    >
      <div className="flex h-full w-full items-center justify-between rounded bg-black px-3 py-2 text-primary transition duration-500 group-hover:bg-opacity-60">
        <ParallelTransition>{children}</ParallelTransition>
        <ArrowIcon
          className={clsx([
            selected ? "rotate-180" : "",
            "ml-auto text-secondary transition duration-500 group-hover:text-white",
          ])}
          width={10}
          height={10}
        />
      </div>
    </button>
  );
};

export default ButtonComponent;
