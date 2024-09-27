"use client";
import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { ArrowUpDownIcon } from "lucide-react";
import React, { useState } from "react";
interface SortMenuProps {
  setSortBy: (sortBy: string) => void;
  sortBy: string;
}
const SortMenu = ({ setSortBy, sortBy }: SortMenuProps) => {
  // when 'sortBy' changes, update the URL parameter

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="shrink-0">
          <ArrowUpDownIcon className="mr-2 h-4 w-4" />
          Sorter
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]" align="end">
        <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
          {/* <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}> */}

          <DropdownMenuRadioItem value="sort=createdAt:desc">
            Nyeste
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sort=createdAt:desc">
            Eldste
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortMenu;
