import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { Nunito } from "next/font/google";
const font = Nunito({
  subsets: ["latin"],
});
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Control title and description in browser
export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
