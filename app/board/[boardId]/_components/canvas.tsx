"use client";

import { useSelf } from "@/liveblocks.config";
import { Info } from "./info";
import { Participants } from "./participants";
import Toolbar from "./toolbar";

interface CanvasProps {
  boardId: string;
}

export  function Canvas({boardId}: CanvasProps) {

  const user = useSelf((me) => me.info);

  return (
    <>
      <Info boardId={boardId} />
      <Participants/>
      <Toolbar />
    </>
  )
}
