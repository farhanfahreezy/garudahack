import MobileNavbar from "@/app/components/MobileNavbar";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return <div className="w-full min-h-screen relative">{children}</div>;
}
