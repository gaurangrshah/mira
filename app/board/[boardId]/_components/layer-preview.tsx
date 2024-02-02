'use client';

import { memo } from 'react';

import { useStorage } from '@/liveblocks.config';

import { LayerType } from '@/types/canvas';
import { Rectangle } from './layers/rectangle';

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string; // sets user's selection color indicating who is editing the layer
}

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) return null;

    switch (layer.type) {
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipse:
      case LayerType.Path:
      case LayerType.Text:
      case LayerType.Note:

      default:
        console.warn('Unknown layer type', layer.type);
        return null;
    }

    return null;
  }
);

LayerPreview.displayName = 'LayerPreview';
