import { Room } from '@/components/room';
import { Canvas } from "./_components/canvas";
import { Loading } from "./_components/canvas-loading";

interface BoardIdPageProps {
  params: {
    boardId: string;
  };
};

export default function BoardIdPage({params}: BoardIdPageProps) {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId}  />
    </Room>
  )
}
