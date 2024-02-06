'use client';

import { memo } from 'react';

import { useStorage } from '@/liveblocks.config';

import { Rectangle } from './layers/rectangle';
import { Ellipse } from './layers/ellipse';
import { Text } from './layers/text';
import { Note } from './layers/note';
import { Path } from './layers/path';

import { LayerType } from '@/types/canvas';
import { colorToCss } from '@/lib/utils';

interface LayerPreviewProps {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectionColor?: string; // sets user's selection color indicating who is editing the layer
}

/**
 * LayerPreview renders the initial selected layer item when a user adds a new canvas element
 * this can be a rectangle, ellipse, path, text, or a note
 *
 */

export const LayerPreview = memo(
  ({ id, onLayerPointerDown, selectionColor }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));
    if (!layer) return null;

    switch (layer.type) {
      case LayerType.Path:
        return (
          <Path
            key={id}
            points={layer.points}
            onPointerDown={(e) => onLayerPointerDown(e, id)}
            x={layer.x}
            y={layer.y}
            fill={layer.fill ? colorToCss(layer.fill) : '#000'}
            stroke={selectionColor}
          />
        );
      case LayerType.Note:
        return (
          <Note
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Text:
        return (
          <Text
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Ellipse:
        return (
          <Ellipse
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
      case LayerType.Rectangle:
        return (
          <Rectangle
            id={id}
            layer={layer}
            onPointerDown={onLayerPointerDown}
            selectionColor={selectionColor}
          />
        );
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
