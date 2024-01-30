import List from "./list";
import { NewButton } from "./new-button";

export function Sidebar() {
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex px-3 flex-col gap-y-4 text-white"><List/><NewButton/></aside>
  )
}
