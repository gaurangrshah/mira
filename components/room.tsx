'use client';

import { RoomProvider } from '@/liveblocks.config';
import { Layer } from '@/types/canvas';
import { LiveList, LiveMap, LiveObject } from '@liveblocks/client';
import { ClientSideSuspense } from '@liveblocks/react';

interface RoomProps {
  roomId: string;
  children: React.ReactNode;
  fallback: NonNullable<React.ReactNode> | null;
}

export function Room({ roomId, children, fallback }: RoomProps) {
  return (
    <RoomProvider
      id={roomId}
      initialPresence={{
        cursor: null,
        selection: [],
      }}
      initialStorage={{
        layers: new LiveMap<string, LiveObject<Layer>>(),
        layerIds: new LiveList(),
      }}
    >
      <ClientSideSuspense fallback={fallback}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}
