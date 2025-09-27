// pages/_app.tsx
import Topbar from "../components/topbar";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // ✅ hide topbar on /authPage
 const hideTopbar = ["/authPage", "/employer/dashboard"].includes(router.pathname);

  return (
    <div style={{ minHeight: "100vh" }}>
      {!hideTopbar && <Topbar />}
      <main style={{ paddingTop: hideTopbar ? "0" : "84px", padding: hideTopbar ? "20px" : "84px 20px 20px" }}>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
