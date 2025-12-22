"use client";
export const dynamic = "force-static";

import { redirect } from "next/navigation";

export default function DashboardMainPage() {
  redirect("/dashboard/main/interpretation");
}
