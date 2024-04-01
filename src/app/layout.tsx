import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Providers from "../reactQuery/Provider";
import Nav from "@/components/nav/Nav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UpperNav from "@/components/nav/UpperNav";
import AutoLoginMiddleware from "@/components/customHooks/AutoLoginMiddleware";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <AutoLoginMiddleware>
            <header className="mb-2  h-[56px] w-full">
              <Nav />
            </header>
            <main className="relative m-auto max-w-[978px]">
              {children}
              <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
              />
            </main>
            <Footer />
          </AutoLoginMiddleware>
        </Providers>
      </body>
    </html>
  );
}
