import createSupabaseServerClient from "@/lib/supabase/server";
import React from "react";
import {Button} from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function SignOut() {
    const Logout = async () => {
        "use server";
        const supabse = await createSupabaseServerClient();
        await supabse.auth.signOut();
        redirect("/auth-server-action");
    }
  return <form action={Logout}>
    <button>
        Sign Out
    </button>
  </form>;
}