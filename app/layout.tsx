import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ProductProvider from "./providers/ProductProvider";
import CartProvider from "./providers/CartProvider";
import ModalProvider from "./providers/ModalProvider";
import { PopupModal } from "./components/PopupModal";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zipkart",
  description: "Buy a to z products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProductProvider>
          <CartProvider>
            <ModalProvider>
              <div className="relative">
                <div>
                  <PopupModal />
                </div>
                <Navbar />
                {children}
              </div>
            </ModalProvider>
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
