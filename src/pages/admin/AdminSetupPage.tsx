import { useState } from "react";
import { completeSetup } from "@/pages/admin/services/authService";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function AdminSetupPage() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await completeSetup(email, password);

      localStorage.setItem("admin_requires_setup", "false");

      nav("/admin/blogs");
    } catch {
      setError("Setup failed. Please try again.");
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
          Complete Administrator Setup
        </h2>

        <p className="text-sm text-muted-foreground text-center">
          Use a valid email address. This will be used for administrator
          authentication and future account recovery.
        </p>

        {error && (
          <div className="text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Administrator Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white"
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white pr-12"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
