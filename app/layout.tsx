export const metadata = {
  title: "Al Haidariya Hiring",
  description: "Hiring Card Management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
