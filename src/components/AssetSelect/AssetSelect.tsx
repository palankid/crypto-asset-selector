"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import DropdownButton from "./components/DropdownButton";
import { useClickOutside } from "@/hooks/useClickOutside";
import { AssetSelectItem } from "./types";
import DropdownList from "./components/DropdownMenu";
import { CryptoAssetId } from "@/definitions/types";

export interface AssetSelectProps {
  options: AssetSelectItem[];
  selected?: CryptoAssetId | null;
  placeholder?: string;
  onSelect?: (item: CryptoAssetId) => void;
}

const AssetSelect = ({
  options = [],
  selected = null,
  placeholder = "Select an item",
  onSelect,
}: AssetSelectProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AssetSelectItem | null>(
    null,
  );
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, closeAssetSelect);

  useEffect(() => {
    if (!selected) return;

    setSelectedItem(
      options.find((option) => option.assetId === selected) ?? null,
    );
  }, [selected, options]);

  function closeAssetSelect() {
    setIsOpened(false);
  }

  const handleButtonClick = useCallback(() => {
    setIsOpened((prev) => (options?.length ? !prev : false));
  }, [options?.length]);

  const handleSelect = useCallback(
    (item: AssetSelectItem) => {
      setSelectedItem(item);
      onSelect?.(item.assetId);
      handleButtonClick();
    },
    [handleButtonClick, onSelect],
  );

  return (
    <div ref={ref} className="relative w-80 select-none xs:w-[405px]">
      <DropdownButton
        selected={isOpened}
        selectedItem={selectedItem}
        placeholder={placeholder}
        onClick={handleButtonClick}
      />

      <DropdownList
        options={options}
        selected={selectedItem}
        opened={isOpened}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default AssetSelect;
