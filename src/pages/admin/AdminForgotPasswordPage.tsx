import { useState } from "react";
import { forgotPassword } from "@/pages/admin/services/authService";

export default function AdminForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: any) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Email required");
      return;
    }

    try {
      setLoading(true);
      await forgotPassword(email);
      setMessage("If this email exists, a reset link has been sent.");
    } catch {
      setError("Something went wrong.");
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
          Forgot Password
        </h2>

        {error && <div className="text-red-400 text-sm">{error}</div>}
        {message && <div className="text-green-400 text-sm">{message}</div>}

        <input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-cyber-red hover:bg-red-600 py-3 rounded-lg font-semibold disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
}
