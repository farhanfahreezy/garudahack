import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";
import Provider from "./(utils)/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BinaBisa",
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
        <Provider>
          <ToasterContext />
          {children}
        </Provider>
      </body>
    </html>
  );
}
