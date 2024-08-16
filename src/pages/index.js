import { analytics, auth, database } from "@/firebaseConfig";
import axios from "axios";
import { logEvent } from "firebase/analytics";
import { signOut } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useEffect, useState } from "react";

const Data = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
      alert(`Error fetching data: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_title: "Data Page",
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);

  // Handle the Save button click
  const handleSave = async (item) => {
    if (analytics) {
      logEvent(analytics, "button_click", {
        button_name: "Save Data",
      });
    }
    try {
      // Create a unique reference for each item to be saved
      const newRef = ref(database, "savedData/" + Date.now());
      await set(newRef, item);
      // Show an alert on successful save
      alert("Data saved successfully");
    } catch (err) {
      setError(err.message);
      alert(`Error saving data: ${err.message}`);
    }
  };

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully");
    } catch (error) {
      setError(error.message);
      alert(`Error logging out: ${error.message}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-white border-b shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-xl font-bold">Data</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="w-full h-64 border p-4 rounded flex flex-col justify-between"
              >
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="line-clamp-3">{item.body}</p>
                </div>
                <button
                  onClick={() => handleSave(item)}
                  className="mt-4 bg-green-500 text-white py-1 px-2 rounded"
                >
                  Save
                </button>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Data;
