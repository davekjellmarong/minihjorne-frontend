import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AutoLoginMiddleware from "@/components/customHooks/AutoLoginMiddleware";
import Footer from "@/components/features/footer/Footer";
import dynamic from "next/dynamic";
import { PHProvider } from "@/providers/PosthogProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import NavProvider from "@/components/features/nav/NavProvider";

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
        <ReactQueryProvider>
          <PHProvider>
            <AutoLoginMiddleware>
              <NavProvider />
              <main className="relative m-auto max-w-[978px]">
                <PostHogPageView />
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
          </PHProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
