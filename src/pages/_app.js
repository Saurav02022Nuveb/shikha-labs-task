import { auth } from "@/firebaseConfig";
import "@/styles/globals.css";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // If user is logged in and tries to access /login, redirect to /
        if (router.pathname === "/login") {
          router.push("/");
        }
      } else {
        // If user is not logged in, redirect to /login
        if (router.pathname !== "/login") {
          router.push("/login");
        }
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, [router]);

  return <Component {...pageProps} />;
}
