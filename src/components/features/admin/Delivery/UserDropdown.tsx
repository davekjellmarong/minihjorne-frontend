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
import { UserQueries } from "@/queryFactory/User";
import { UserBackend } from "@/utils/types";
import { useSuspenseQuery } from "@tanstack/react-query";

interface UserDropdownProps {
  setSelectedUser: (user: UserBackend) => void;
  selectedUser: UserBackend | undefined;
}
const UserDropdown = ({ setSelectedUser, selectedUser }: UserDropdownProps) => {
  const { data: users } = useSuspenseQuery(UserQueries.allUsers());

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2 bg-brand-500 text-white hover:bg-brand-600">
          <UserIcon className="h-4 w-4" />
          {selectedUser ? selectedUser.username : "Velg en bruker"}

          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Velg en ny bruker</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {users.map((user) => {
          return (
            <DropdownMenuItem
              key={user.id}
              onClick={() => {
                setSelectedUser(user);
              }}
            >
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage
                    src="/placeholder-user.jpg"
                    alt={user.username}
                  />
                  <AvatarFallback>{user.username}</AvatarFallback>
                </Avatar>
                <div>{user.username}</div>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
