import { useLocalParticipant, useTrackToggle } from "@livekit/components-react";
import { IconButton, Tooltip } from "@mui/material";
import { IconMicrophone, IconMicrophoneOff } from "@tabler/icons-react";
import { Track } from "livekit-client";
import { toast } from "sonner";

export const MicrophoneToggle = () => {
  const { toggle, enabled, pending } = useTrackToggle({
    source: Track.Source.Microphone,
    initialState: false,
    onDeviceError: (error) => {
      if (error.name === "NotAllowedError") {
        toast.error(
          "Permission to access the microphone was denied. Please allow access and try again.",
        );
      }
    },
  });
  const { localParticipant } = useLocalParticipant();

  const onClick = () => {
    toggle();

    // Simply calling toggle essentially stops outgoing audio data, but the microphone is still active
    // Without unpublishing, the browser will still show the microphone active icon
    if (enabled) {
      const pub = localParticipant.getTrackPublication(Track.Source.Microphone);
      if (pub?.track) {
        pub.track.mediaStreamTrack.stop();
        localParticipant.unpublishTrack(pub.track);
      }
    }
  };

  return (
    <Tooltip
      title={enabled ? "Mute microphone" : "Unmute microphone"}
      placement="top"
      arrow
    >
      <IconButton
        sx={{ color: "phantom.default" }}
        onClick={onClick}
        disabled={pending}
      >
        {enabled ? <IconMicrophone /> : <IconMicrophoneOff />}
      </IconButton>
    </Tooltip>
  );
};
