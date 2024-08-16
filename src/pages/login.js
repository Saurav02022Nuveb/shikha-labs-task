import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/firebaseConfig";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (auth.currentUser) {
      // If user is already logged in, redirect to /
      router.push("/");
    }
  }, [router]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      router.push("/");
    } catch (err) {
      console.error("Login error:", err.message); // Log the error message
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Sign in with Google
      </button>
      {error ? <p className="text-red-500">{error}</p> : null}
    </div>
  );
};

export default Login;
