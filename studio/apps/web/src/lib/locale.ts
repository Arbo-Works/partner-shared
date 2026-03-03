"use server";

import { cookies } from "next/headers";

import { defaultLocale } from "@/i18n/config";

// The locale is read from a cookie. We could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  return (await cookies()).get(COOKIE_NAME)?.value || defaultLocale;
}
