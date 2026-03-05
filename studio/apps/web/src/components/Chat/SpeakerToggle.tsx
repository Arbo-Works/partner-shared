import { useState } from "react";
import { RoomAudioRenderer } from "@livekit/components-react";
import { IconButton, Tooltip } from "@mui/material";
import { IconHeadphones, IconHeadphonesOff } from "@tabler/icons-react";

export const SpeakerToggle = () => {
  const [isPlaybackMuted, setIsPlaybackMuted] = useState(true);

  return (
    <>
      <RoomAudioRenderer muted={isPlaybackMuted} />
      <Tooltip
        title={isPlaybackMuted ? "Unmute speaker" : "Mute speaker"}
        placement="top"
        arrow
      >
        <IconButton
          sx={{ color: "phantom.default" }}
          onClick={() => setIsPlaybackMuted(!isPlaybackMuted)}
        >
          {isPlaybackMuted ? <IconHeadphonesOff /> : <IconHeadphones />}
        </IconButton>
      </Tooltip>
    </>
  );
};
