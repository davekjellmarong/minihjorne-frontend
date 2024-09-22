"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { ChevronDownIcon, UserIcon } from "lucide-react";
import { Button } from "@/components/UI/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/UI/avatar";
import { Seller } from "@/utils/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { SellerQueries } from "@/queryFactory/Seller";

interface UserDropdownProps {
  setSelectedSeller: (user: Seller) => void;
  selectedSeller: Seller | undefined;
}
const UserDropdown = ({
  setSelectedSeller,
  selectedSeller,
}: UserDropdownProps) => {
  const { data: sellers } = useSuspenseQuery(SellerQueries.allSellers());

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2 bg-brand-500 text-white hover:bg-brand-600">
          <UserIcon className="h-4 w-4" />
          {selectedSeller
            ? selectedSeller.attributes.username
            : "Velg en bruker"}

          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Velg en ny bruker</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sellers.map((seller) => {
          return (
            <DropdownMenuItem
              key={seller.id}
              onClick={() => {
                setSelectedSeller(seller);
              }}
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="/placeholder-user.jpg"
                    alt={seller.attributes.username}
                  />
                  <AvatarFallback>{seller.attributes.username}</AvatarFallback>
                </Avatar>
                <div>{seller.attributes.username}</div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
