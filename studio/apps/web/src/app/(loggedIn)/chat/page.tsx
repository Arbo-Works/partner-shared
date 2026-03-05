"use client";

import Chat from "@/components/Chat";
import Stage from "@/components/Stage";

export default function Home() {
  return (
    <Stage visible disableBottomPadding disableTopPadding>
      <Chat />
    </Stage>
  );
}
