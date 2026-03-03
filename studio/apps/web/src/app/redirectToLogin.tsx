"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToLogin() {
  const router = useRouter();
  useEffect(() => {
    const jwtToken = sessionStorage.getItem("jwt_token");
    if (!jwtToken) {
      router.push("/");
    }
  }, [router]);

  return null;
}
