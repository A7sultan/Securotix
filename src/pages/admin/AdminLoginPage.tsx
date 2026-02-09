import { useState } from "react";
import { adminLogin } from "@/pages/admin/services/authService";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo_transparent.png";

export default function AdminLoginPage() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e:any) {
    e.preventDefault();
    setError("");

    if(!email || !password){
      setError("Please enter email and password");
      return;
    }

    try{
      await adminLogin(email,password);
      nav("/admin/blogs");
    }catch{
      setError("Invalid email or password");
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-10">

      <div className="
        w-full
        max-w-5xl
        grid
        lg:grid-cols-2
        gap-12
        items-center
      ">

        {/* Logo */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={logo}
            alt="Securotix"
            className="
              w-[180px]
              sm:w-[220px]
              lg:w-[300px]
              object-contain
            "
          />
        </div>

        {/* Login */}
        <form
          onSubmit={submit}
          className="
            relative
            glass
            p-8 sm:p-10
            rounded-2xl
            border border-red-900/40
            shadow-[0_0_35px_rgba(255,0,0,0.18)]
            space-y-6
            w-full
            max-w-md
            mx-auto
          "
        >
          {/* glow line */}
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
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyber-red"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white focus:outline-none focus:border-cyber-red"
          />

          <button className="w-full bg-cyber-red hover:bg-red-600 transition py-3 rounded-lg text-white font-semibold">
            Login
          </button>
        </form>

      </div>
    </div>
  );
}
