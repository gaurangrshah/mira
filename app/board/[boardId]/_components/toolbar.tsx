import {
  Circle,
  MousePointer2,
  Pen,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from 'lucide-react';

import { ToolButton } from './tool-button';

export default function Toolbar() {
  return (
    <div className='absolute left-2 top-[50%] flex -translate-y-[50%] flex-col gap-y-4'>
      Toolbar
      <div className='flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md'>
        <ToolButton
          label='Select'
          icon={MousePointer2}
          onClick={() => {}}
          isActive={true}
        />
        <ToolButton
          label='Text'
          icon={Type}
          onClick={() => {}}
          isActive={true}
        />
        <ToolButton
          label='Sticky Note'
          icon={StickyNote}
          onClick={() => {}}
          isActive={true}
        />
        <ToolButton
          label='Rectangle'
          icon={Square}
          onClick={() => {}}
          isActive={true}
        />
        <ToolButton
          label='Ellipsis'
          icon={Circle}
          onClick={() => {}}
          isActive={true}
        />
        <ToolButton
          label='Pencil'
          icon={Pen}
          onClick={() => {}}
          isActive={true}
        />
        <div className='flex flex-col items-center rounded-md bg-white p-1.5 shadow-md'>
          <ToolButton
            label='Undo'
            icon={Undo2}
            onClick={() => {}}
            // canvasState.mode === CanvasMode.None ||
            // canvasState.mode === CanvasMode.Translating ||
            // canvasState.mode === CanvasMode.SelectionNet ||
            // canvasState.mode === CanvasMode.Pressing ||
            // canvasState.mode === CanvasMode.Resizing
            isDisabled={false}
          />
          <ToolButton
            label='Redo'
            icon={Redo2}
            onClick={() => {}}
            // canvasState.mode === CanvasMode.None ||
            // canvasState.mode === CanvasMode.Translating ||
            // canvasState.mode === CanvasMode.SelectionNet ||
            // canvasState.mode === CanvasMode.Pressing ||
            // canvasState.mode === CanvasMode.Resizing
            isDisabled={false}
          />
        </div>
      </div>
    </div>
  );
}

export const ToolbarSkeleton = () => {
  return (
    <div className='absolute left-2 top-[50%] flex h-[360px] w-[52px] -translate-y-[50%] flex-col gap-y-4 rounded-md bg-white shadow-md' />
  );
};
