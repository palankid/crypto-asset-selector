import clsx from "clsx";
import { v4 as uuid } from "uuid";
import { memo, useEffect, useState } from "react";

interface ParalellTransitionProps {
  children: React.ReactNode;
}

const ParallelTransition = memo(function ParallelTransition({
  children,
}: ParalellTransitionProps) {
  const [displayList, setDisplayList] = useState([
    { children, visible: true, key: uuid() },
  ]);

  useEffect(() => {
    if (displayList[0].children === children) return;

    setDisplayList(([prev]) => {
      return [
        { children, visible: false, key: uuid() },
        { ...prev, visible: false },
      ];
    });

    const timer = setTimeout(() => {
      setDisplayList(([first, ...rest]) => {
        return [{ ...first, visible: true }, ...rest];
      });
    }, 20);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <>
      {displayList.map(({ children, visible, key }) => (
        <div
          key={key}
          className={clsx([
            visible ? "opacity-100 ease-out" : "opacity-0 ease-in",
            "absolute transition-opacity duration-500",
          ])}
        >
          {children}
        </div>
      ))}
    </>
  );
});

export default ParallelTransition;
