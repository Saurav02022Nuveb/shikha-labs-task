import { auth } from "@/firebaseConfig"; // Adjust the path as needed
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const OtherRoutes = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Check if user exists
      setLoading(false); // Stop loading after the check
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (!loading) {
      if (isAuthenticated) {
        router.push("/"); // Redirect to index page if authenticated
      } else {
        router.push("/login"); // Redirect to login page if not authenticated
      }
    }
  }, [loading, isAuthenticated, router]);

  // Show loading state while checking authentication
  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return null; // This component handles redirection, so nothing else is rendered
};

export default OtherRoutes;
