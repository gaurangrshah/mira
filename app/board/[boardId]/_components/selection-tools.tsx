'use client';

import { memo } from 'react';
import { BringToFront, SendToBack, Trash2 } from 'lucide-react';

import type { Camera, Color } from '@/types/canvas';

import { Button } from '@/components/ui/button';
import { Hint } from '@/components/hint';
import { ColorPicker } from './color-picker';

import { useDeleteLayers } from '@/hooks/use-delete-layers';
import { useSelectionBounds } from '@/hooks/use-seelction-bounds';
import { useMutation, useSelf } from '@/liveblocks.config';
interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const moveToBack = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get('layerIds');
        const indices: number[] = [];
        const arr = liveLayerIds.toImmutable();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayerIds.move(indices[i], i);
        }
      },
      [selection]
    );

    const moveToFront = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get('layerIds');
        const indices: number[] = [];
        const arr = liveLayerIds.toImmutable();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) {
            indices.push(i);
          }
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayerIds.move(
            indices[i],
            arr.length - 1 - (indices.length - 1 - i)
          );
        }
      },
      [selection]
    );

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get('layers');
        setLastUsedColor(fill);

        selection.forEach((id) => {
          liveLayers.get(id)?.set('fill', fill);
        });
      },
      [selection, setLastUsedColor]
    );

    const deleteLayers = useDeleteLayers();

    const selectionBounds = useSelectionBounds();
    if (!selectionBounds) return null;

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className='absolute flex select-none rounded-xl border bg-white p-3 shadow-sm'
        style={{
          transform: `translate(
          calc(${x}px - 50%),
          calc(${y - 16}px - 100%)
        )`,
        }}
      >
        <ColorPicker onChange={setFill} />
        <div className='flex flex-col gap-y-0.5'>
          <Hint label='Bring to front'>
            <Button variant='board' size='icon' onClick={moveToFront}>
              <BringToFront />
            </Button>
          </Hint>
          <Hint label='Send to back' side='bottom'>
            <Button variant='board' size='icon' onClick={moveToBack}>
              <SendToBack />
            </Button>
          </Hint>
        </div>
        <div className='ml-2 flex items-center border-l border-neutral-200 pl-2'>
          <Hint label='Delete'>
            <Button variant='board' size='icon' onClick={deleteLayers}>
              <Trash2 />
            </Button>
          </Hint>
        </div>
      </div>
    );
  }
);

SelectionTools.displayName = 'SelectionTools';
