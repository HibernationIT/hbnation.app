import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import "./reset.css";

const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hibernation IT",
  description: "내가 만들고 싶은거 만드는 개발 블로그 - Hibernation IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
