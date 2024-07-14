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
import { PHProvider } from "@/providers/PosthogProvider";
import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("@/providers/PostHogPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Minihjørne",
  description: "Kjøp og salg av barneklær",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="NO">
      <body className={inter.className}>
        <Providers>
          {/* <PHProvider> */}
          <AutoLoginMiddleware>
            <Nav />
            <main className="relative m-auto max-w-[978px]">
              {/* <PostHogPageView /> */}
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
          {/* </PHProvider> */}
        </Providers>
      </body>
    </html>
  );
}
