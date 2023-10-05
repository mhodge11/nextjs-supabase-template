"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";

export function Analytics() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV !== "production") return null;

  return <VercelAnalytics />;
}
