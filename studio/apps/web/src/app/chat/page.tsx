"use client";

import Chat from "@/components/Chat";
import { NavigationLayout } from "@/components/Navigation/Layout";
import Stage from "@/components/Stage";

export default function Home() {
  return (
    <NavigationLayout>
      <Stage visible disableBottomPadding disableTopPadding>
        <Chat />
      </Stage>
    </NavigationLayout>
  );
}
