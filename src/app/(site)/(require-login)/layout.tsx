import MobileNavbar from "@/app/components/MobileNavbar";

export default async function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen relative">
      {children}
      <MobileNavbar />
    </div>
  );
}
