import { useState } from "react";
import { completeSetup } from "@/pages/admin/services/authService";
import { useNavigate } from "react-router-dom";

export default function AdminSetupPage() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: any) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields required");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      setLoading(true);

      await completeSetup(email, password);

      localStorage.setItem("admin_requires_setup", "false");

      nav("/admin/blogs");

    } catch {
      setError("Setup failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={submit}
        className="glass p-10 rounded-2xl border border-red-900/40 space-y-6 w-full max-w-md"
      >
        <h2 className="text-xl font-bold text-center">
          Complete Admin Setup
        </h2>

        {error && (
          <div className="text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <input
          placeholder="New Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white"
        />

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyber-red hover:bg-red-600 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save & Continue"}
        </button>
      </form>
    </div>
  );
}
