import { useState } from "react";
import { adminLogin } from "@/pages/admin/services/authService";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e:any) {
    e.preventDefault();
    await adminLogin(email, password);
    nav("/admin/blogs");
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={submit} className="glass p-10 rounded-xl w-[400px]">
        <h2 className="text-2xl font-bold mb-6">Admin Login</h2>

        <input
          placeholder="Email"
          className="input mb-4"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input mb-6"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button className="w-full bg-cyber-red hover:bg-red-600 text-white py-3 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}
