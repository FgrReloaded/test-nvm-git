import type { Metadata } from "next";

import "../index.css";
import Providers from "@/components/providers";

export const metadata: Metadata = {
  title: "my-better-t-app",
  description: "my-better-t-app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="grid grid-rows-[auto_1fr] h-svh">
            {children} Hello
          </div>
        </Providers>
      </body>
    </html>
  );
}
