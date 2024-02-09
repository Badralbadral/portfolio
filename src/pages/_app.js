import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import ThemeProviderS from "@/context/ThemeContext";
import { Div } from "@/components/Div";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProviderS>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeProviderS>
    </>
  );
}
