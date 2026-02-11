import { useState } from "react";
import { adminLogin, getToken } from "@/pages/admin/services/authService";
import { useNavigate, Navigate } from "react-router-dom";
import logo from "@/assets/logo_transparent.png";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (getToken()) {
    return <Navigate to="/admin" replace />;
  }

  async function submit(e: any) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);

      const data = await adminLogin(email, password);

      if (data.requiresSetup) {
        nav("/admin/setup");
      } else {
        nav("/admin/blogs");
      }

    } catch (err: any) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">

        {/* Logo */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={logo}
            alt="Securotix"
            className="w-[180px] sm:w-[220px] lg:w-[300px] object-contain"
          />
        </div>

        {/* Login */}
        <form
          onSubmit={submit}
          className="relative glass p-8 sm:p-10 rounded-2xl border border-red-900/40 shadow-[0_0_35px_rgba(255,0,0,0.18)] space-y-6 w-full max-w-md mx-auto"
        >
          <div className="absolute -top-[2px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <h2 className="text-xl sm:text-2xl font-bold text-center">
            Securotix Admin Login
          </h2>

          {error && (
            <div className="text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyber-red"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyber-red pr-12"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyber-red hover:bg-red-600 transition py-3 rounded-lg text-white font-semibold disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <div className="text-center text-sm">
            <a
              href="/admin/forgot-password"
              className="text-red-400 hover:text-red-300"
            >
              Forgot Password?
            </a>
          </div>

        </form>

      </div>
    </div>
  );
}
