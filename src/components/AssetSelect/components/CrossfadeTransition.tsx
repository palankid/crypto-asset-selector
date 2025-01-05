import { v4 as uuid } from "uuid";
import { useEffect, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";

interface CrossfadeTransitionProps {
  children: React.ReactNode;
}

const CrossfadeTransition = ({ children }: CrossfadeTransitionProps) => {
  const [displayList, setDisplayList] = useState([
    { children, visible: true, key: uuid() },
  ]);
  const prevChildrenRef = useRef(children);

  useEffect(() => {
    if (prevChildrenRef.current === children) return;

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

    prevChildrenRef.current = children;

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div className="relative grid h-full w-full grid-cols-1 grid-rows-1">
      {displayList.map(({ children, visible, key }) => (
        <div
          key={key}
          className={twJoin(
            visible ? "opacity-100 ease-out" : "opacity-0 ease-in",
            "col-start-1 row-start-1 h-full w-full transition-opacity duration-500",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default CrossfadeTransition;
