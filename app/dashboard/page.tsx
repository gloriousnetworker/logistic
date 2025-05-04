"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

type UserProfile = {
  id: number;
  fullName: string;
  email: string;
  createdAt: string;
};

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState("");

  // 1) Protect this route: if no token, immediately redirect
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.replace("/login");
      return;
    }
  }, [router]);

  useEffect(() => {
    // 2) Fetch user profile
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          router.replace("/login");
          return;
        }

        const res = await fetch("/api/user/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch profile");
        }
        setUser(data.user);
      } catch (err: any) {
        setError(err.message);
        // If token is invalid or expired, clear and redirect
        if (err.message.includes("expired") || err.message.includes("Invalid")) {
          localStorage.removeItem("authToken");
          router.replace("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.replace("/login");
  };

  return (
    <>
      <Head>
        <title>Dashboard | Arthur Great Logistics</title>
        <meta name="description" content="User dashboard for Arthur Great Logistics" />
      </Head>

      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-gradient-to-r from-green-800 to-green-600 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-white">Arthur Great Logistics</h1>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-white text-green-700 rounded-md shadow hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Loading...</p>
              </div>
            ) : error ? (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mb-4">
                {error}
              </div>
            ) : user ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Welcome, {user.fullName}!
                </h2>

                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Your Profile</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Full Name</p>
                      <p className="text-md font-medium">{user.fullName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-md font-medium">{user.email}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Member Since</p>
                      <p className="text-md font-medium">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Dashboard Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Orders", "Shipments", "Settings"].map((item) => (
                      <div
                        key={item}
                        className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow transition-shadow"
                      >
                        <h4 className="text-lg font-medium text-green-800 mb-2">{item}</h4>
                        <p className="text-gray-600">
                          Manage your {item.toLowerCase()} and track progress.
                        </p>
                        <button className="mt-4 text-green-700 font-medium hover:text-green-800">
                          View {item} →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No user data found</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
