export const metadata = {
  title: "Al Haidariya Hiring",
  description: "Hiring Card Management for Al Haidariya Heavy Equipment Hiring",
  keywords: "hiring, machinery, equipment, card management, construction",
  author: "Al Haidariya Team",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Adding Google Font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
        {/* You can add your custom stylesheets here */}
        <style>
          body {{
            font-family: 'Roboto', sans-serif;
            background-color: #f9fafb; /* Optional: Light background color */
            margin: 0;
            padding: 0;
          }}
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}
