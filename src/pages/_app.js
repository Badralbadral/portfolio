import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import ThemeProviderS from "@/context/ThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProviderS>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeProviderS>
  );
}
