import { twMerge } from "tailwind-merge";

interface RowLayoutProps {
  children: React.ReactNode;
  iconComponent?: React.ReactNode;
  className?: string;
}

const RowLayout = ({
  children,
  iconComponent,
  className = "",
}: RowLayoutProps) => {
  return (
    <div
      className={twMerge(
        "grid grid-cols-[1fr_28px] items-center justify-self-stretch px-3.5 py-2",
        className,
      )}
    >
      <div className="flex items-center justify-between">{children}</div>
      {iconComponent}
    </div>
  );
};

export default RowLayout;
