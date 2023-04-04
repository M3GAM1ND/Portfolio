import CanvasAnimation from "@/component/canvas";
import DarkCanvasAnimation from "@/component/darkCanvas";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { VT323 } from "next/font/google";
import { useEffect, useState } from "react";

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const root = document.documentElement;
    if (theme == "light") {
      root.style.setProperty("--color", "#000000");
    } else {
      root.style.setProperty("--color", "#04f404");
    }
  });

  const themeChange = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      {theme == "light" ? <CanvasAnimation /> : <DarkCanvasAnimation />}
      <main className={`${pixelFont.className} ${theme}`}>
        <Navbar handleClick={themeChange} currentTheme={theme} />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
