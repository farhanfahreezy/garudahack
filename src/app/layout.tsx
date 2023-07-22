import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import Provider from "./(utils)/provider";
import { ClientProvider } from "@/utils/trpc-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binabisa",
  description: "Empowering Opportunities for All",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProvider>
          <Provider>
            <ToasterContext />
            {children}
          </Provider>
        </ClientProvider>
      </body>
    </html>
  );
}
