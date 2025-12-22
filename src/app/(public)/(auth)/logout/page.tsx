"use client";
export const dynamic = "force-static";

import { supabase } from "@/lib/supabase.js";
import { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    supabase.auth.signOut();
    window.location.href = "/login";
  }, []);

  return <p>Logging out...</p>;
}
