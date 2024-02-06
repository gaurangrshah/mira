import {
  Circle,
  MousePointer2,
  Pen,
  Pencil,
  Redo2,
  Scan,
  Square,
  StickyNote,
  Type,
  Undo2,
} from 'lucide-react';

import { ToolButton } from './tool-button';
import { type CanvasState, CanvasMode, LayerType } from '@/types/canvas';

interface ToolbarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
  resetCamera: () => void;
}

export default function Toolbar(props: ToolbarProps) {
  const { canvasState, setCanvasState } = props;
  return (
    <div className='absolute left-2 top-[50%] flex -translate-y-[50%] flex-col gap-y-4'>
      Toolbar
      <div className='flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md'>
        <ToolButton
          label='Select'
          icon={MousePointer2}
          onClick={() =>
            props.setCanvasState({
              mode: CanvasMode.None,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolButton
          label='Text'
          icon={Type}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label='Sticky note'
          icon={StickyNote}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label='Rectangle'
          icon={Square}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolButton
          label='Ellipse'
          icon={Circle}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
        />
        <ToolButton
          label='Pen'
          icon={Pencil}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil,
            })
          }
          isActive={canvasState.mode === CanvasMode.Pencil}
        />
      </div>
      <div className='flex flex-col items-center rounded-md bg-white p-1.5 shadow-md'>
        <ToolButton
          label='Undo'
          icon={Undo2}
          onClick={props.undo}
          isDisabled={!props.canUndo}
        />
        <ToolButton
          label='Redo'
          icon={Redo2}
          onClick={props.redo}
          isDisabled={!props.canRedo}
        />
      </div>
      {/* <div className='flex flex-col items-center rounded-md bg-white p-1.5 shadow-md'>
        <ToolButton
          label='Reset View'
          icon={Scan}
          onClick={props.resetCamera}
        />
      </div> */}
    </div>
  );
}

export const ToolbarSkeleton = () => {
  return (
    <div className='absolute left-2 top-[50%] flex h-[360px] w-[52px] -translate-y-[50%] flex-col gap-y-4 rounded-md bg-white shadow-md' />
  );
};
