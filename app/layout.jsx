import "../styles/globals.css";

export const metadata = {
  title: "devsquad",
  description: "collaborate, build and learn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
