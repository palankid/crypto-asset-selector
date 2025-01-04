"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ButtonComponent from "./components/ButtonComponent";
import { useClickOutside } from "@/hooks/useClickOutside";
import { AssetSelectItem } from "./types";
import Dropdown from "./components/Dropdown";

export interface AssetSelectProps {
  options: AssetSelectItem[];
  selected?: AssetSelectItem | null;
  placeholder?: string;
  onSelect?: (item: AssetSelectItem) => void;
}

const AssetSelect = ({
  options = [],
  selected = null,
  placeholder = "Select an item",
  onSelect,
}: AssetSelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AssetSelectItem | null>(
    selected,
  );
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeAssetSelect);

  useEffect(() => {
    setSelectedItem(selected);
  }, [selected]);

  function closeAssetSelect() {
    setIsOpened(false);
  }

  const handleButtonClick = () => {
    setIsOpened((prev) => (options?.length ? !prev : false));
  };

  const handleSelect = useCallback((item: AssetSelectItem) => {
    setSelectedItem(item);
    onSelect?.(item);
    handleButtonClick();
  }, []);

  return (
    <div ref={ref} className="relative w-full min-w-96 select-none">
      <ButtonComponent
        selected={isOpened}
        selectedItem={selectedItem}
        placeholder={placeholder}
        onClick={handleButtonClick}
      />

      <Dropdown
        options={options}
        selected={selectedItem}
        opened={isOpened}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default AssetSelect;
