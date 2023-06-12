import "./globals.css";
import { Nunito } from "next/font/google";
const font = Nunito({
  subsets: ["latin"],
});

import Navbar from "./components/navbar/Navbar";
import { Inter } from "next/font/google";
import ClientOnly from "./components/ClientOnly";
const inter = Inter({ subsets: ["latin"] });

// import Modal from "./components/modals/modal";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import RentModal from "./components/modals/RentModal";

import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

// Control title and description in browser
export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
