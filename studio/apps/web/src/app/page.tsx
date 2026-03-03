"use client";

import { useState } from "react";
import { StudioService } from "@arta/studio-proto/gen/studio_pb";
import { useMutation } from "@connectrpc/connect-query";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

export default function Login() {
  const t = useTranslations("pages.login");
  const router = useRouter();

  const [email, setEmail] = useState("");

  const logInMutation = useMutation(StudioService.method.logIn, {
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (response) => {
      sessionStorage.setItem("jwt_token", response.jwtToken);
      router.push("/chat");
    },
  });
  const { isPending } = logInMutation;

  return (
    <Box
      sx={{
        bgcolor: "surface.backdrop",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: "0.5rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "30rem",
          borderRadius: "2rem",
          p: { xs: "2rem", md: "2.5rem" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mx: "1rem",
        }}
      >
        <Stack
          direction="row"
          spacing="0.6rem"
          alignItems="center"
          sx={{ mb: "0.5rem" }}
        >
          <Typography
            variant="impact3Em"
            sx={{
              color: "phantom.emphasis",
              fontSize: "2.7rem", // matching 43.2px
              lineHeight: 1,
              letterSpacing: "0.045rem", // 0.72px
            }}
          >
            {t("studio")}
          </Typography>
        </Stack>

        <Typography
          variant="headline1Em"
          sx={{
            color: "content.emphasis",
            textAlign: "center",
            maxWidth: "16.375rem", // 262px
            mb: "4rem",
          }}
        >
          {t("heading")}
        </Typography>

        <Stack spacing="1.5rem" sx={{ width: "100%", mb: "2.75rem" }}>
          <Stack spacing="0.75rem">
            <Stack
              direction="row"
              spacing="0.75rem"
              alignItems="center"
              sx={{ px: "0.5rem" }}
            >
              <Typography
                variant="cappedSmall"
                sx={{ color: "content.default", letterSpacing: "0.2rem" }}
              >
                {t("username")}
              </Typography>
            </Stack>
            <TextField
              fullWidth
              placeholder="ludepas"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "1.5rem",
                  height: "3rem", // 48px
                  bgcolor: "transparent",
                  "& fieldset": {
                    borderColor: "content.default",
                    borderWidth: "0.09375rem", // 1.5px
                  },
                  "&:hover fieldset": {
                    borderColor: "content.emphasis",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "accent.primary",
                    borderWidth: "0.09375rem", // 1.5px
                  },
                },
                "& .MuiInputBase-input": {
                  typography: "inputTextLarge",
                  color: "phantom.emphasis",
                  px: "1.25rem",
                },
              }}
            />
          </Stack>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={isPending || !email}
            sx={{
              height: "3rem", // 48px
              borderRadius: "62.5rem", // 1000px
              typography: "buttonSmall",
              textTransform: "none",
            }}
            onClick={async (event) => {
              event.preventDefault();
              await logInMutation.mutate({
                email,
              });
            }}
          >
            {t("continue")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
