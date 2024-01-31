"use client";

import { useQuery } from "convex/react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Hint } from "@/components/hint";
import { Actions } from "@/components/actions";

import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

const TabSeparator = () => {
  return (
    <div className="text-neutral-300 px-1.5" />
  )
}

export function Info({ boardId }: InfoProps) {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  })

  const {onOpen} = useRenameModal();

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className={cn("absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md")}>
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button variant="board" className="px-4">
          <Link href="/">
            <Image src="/logo.svg" width={40} height={40} alt="logo" />
            <span className="font-poppins text-xl ml-2 font-semibold">board</span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
        <Hint label="Edit title" side="bottom" sideOffset={10}>
          <Button
            variant="board"
            className="text-base font-normal px-2"
            onClick={() => onOpen({id: data._id, title: data.title})}
          >
            {data.title}
          </Button>
        </Hint>
        <TabSeparator />
        <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
          <Button variant="board"  size="icon">
            <Menu />
          </Button>
        </Actions>
    </div>
  )
}


export const InfoSkeleton = () => {
  return (
    <div
      className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]"
    />
  );
};
