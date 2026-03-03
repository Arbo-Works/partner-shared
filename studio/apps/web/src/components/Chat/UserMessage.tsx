import { ReceivedMessage } from "@livekit/components-react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Typography from "@/components/Typography";

export default function UserMessage({ data }: { data: ReceivedMessage }) {
  const { id, message } = data;

  return (
    <Stack direction="column" alignItems="flex-end" gap="0.5rem">
      <Box
        key={id}
        sx={{
          backgroundColor: "surface.default",
          borderRadius: "2rem",
          padding: "0.6rem 1.25rem",
          display: "inline-block",
          maxWidth: "44rem",
        }}
      >
        <Typography
          variant="body1"
          color="content.default"
          sx={{
            whiteSpace: "break-spaces",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Stack>
  );
}
