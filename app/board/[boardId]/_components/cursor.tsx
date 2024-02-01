'use client';

import { memo } from 'react';
import { MousePointer2 } from 'lucide-react';

import { useOther } from '@/liveblocks.config';
import { connectionIdToColor } from '@/lib/utils';

interface CursorProps {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);

  const name = info?.name || 'Teammate';

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      // foreign object is used to render an icon for cursor bc the cursor renders inside of an svg element
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`, // this animates cursor position change
      }}
      height={50}
      width={name.length * 10 + 24}
      className='relative drop-shadow-md'
    >
      <MousePointer2
        className='h-5 w-5'
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
      <div
        className='absolute left-5 rounded-md px-1.5 py-0.5 text-xs font-semibold text-white'
        style={{ backgroundColor: connectionIdToColor(connectionId) }}
      >
        {name}
      </div>
    </foreignObject>
  );
});

Cursor.displayName = 'Cursor';
