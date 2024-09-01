import "./globals.css";

export const metadata = {
  title: "Spotify",
  description: "Clone do Spotify com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  );
}
