'use client';

import { useState } from 'react';
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useSelf,
} from '@/liveblocks.config';

import { CanvasMode, type CanvasState } from '@/types/canvas';

import { Info } from './info';
import { Participants } from './participants';
import Toolbar from './toolbar';

interface CanvasProps {
  boardId: string;
}

export function Canvas({ boardId }: CanvasProps) {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const user = useSelf((me) => me.info);

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        undo={history.undo}
        redo={history.redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
    </>
  );
}
