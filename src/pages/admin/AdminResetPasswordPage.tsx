import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "@/pages/admin/services/authService";

export default function AdminResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const nav = useNavigate();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: any) {
    e.preventDefault();
    setError("");

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!token) {
      setError("Invalid reset token");
      return;
    }

    try {
      setLoading(true);
      await resetPassword(token, password);
      nav("/admin/login");
    } catch {
      setError("Reset failed or token expired");
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
          Reset Password
        </h2>

        {error && <div className="text-red-400 text-sm">{error}</div>}

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
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
}
