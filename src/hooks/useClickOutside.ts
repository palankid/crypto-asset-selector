import { RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref?.current?.contains(event.target as HTMLElement)) {
      return;
    }

    callback();
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
