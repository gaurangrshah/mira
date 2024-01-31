import { Info } from "./info";
import { Participants } from "./participants";
import Toolbar from "./toolbar";

interface CanvasProps {
  boardId: string;
}

export  function Canvas({boardId}: CanvasProps) {
  return (
    <>
      <Info />
      <Participants/>
      <Toolbar />
    </>
  )
}
