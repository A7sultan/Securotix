import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "@/pages/admin/services/authService";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo_transparent.png";

export default function AdminDashboardLayout() {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);

  function doLogout() {
    logout();
    nav("/admin/login");
  }

  return (
    <div className="min-h-screen flex bg-background">

      {/* MOBILE HEADER */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-black border-b border-red-900/40 flex items-center justify-between px-6 py-4 z-50">

        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Securotix" className="h-16 object-contain" />
          <span className="text-white font-semibold text-lg">
            Admin Portal
          </span>
        </Link>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden fixed top-[72px] left-0 right-0 bg-black border-b border-red-900/40 p-6 z-40 mt-4">
          <nav className="flex flex-col gap-4">
            <Link onClick={()=>setOpen(false)} to="/admin/blogs">Blogs</Link>
            <Link onClick={()=>setOpen(false)} to="/admin/comments">Comments</Link>
            <button onClick={doLogout} className="bg-cyber-red text-white py-2 rounded-lg">
              Logout
            </button>
          </nav>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden lg:flex w-72 bg-black border-r border-red-900/40 p-6 flex-col sticky top-0 h-screen">

        <Link to="/" className="flex flex-col items-center mb-10">
          <img
            src={logo}
            alt="Securotix"
            className="h-24 object-contain mb-2"
          />
          <span className="text-white font-semibold text-lg tracking-wide">
            Admin Portal
          </span>
          
        </Link>

        <nav className="flex flex-col gap-4 text-center text-sm">
          <Link to="/admin/blogs" className="hover:text-cyber-red">Blogs</Link>
          <Link to="/admin/comments" className="hover:text-cyber-red">Comments</Link>
        </nav>

        <button
          onClick={doLogout}
          className="mt-auto bg-cyber-red text-white py-2 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* MAIN */}
      <main className="flex-1 p-6 lg:p-10 mt-[72px] lg:mt-0">
        <Outlet />
      </main>

    </div>
  );
}
