import "./globals.css";

export const metadata = {
  title: "Wooltari Web App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
