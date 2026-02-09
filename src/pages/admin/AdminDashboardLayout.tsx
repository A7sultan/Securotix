import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "@/pages/admin/services/authService";

export default function AdminDashboardLayout() {

  const nav = useNavigate();

  function doLogout() {
    logout();
    nav("/admin/login");
  }

  return (
    <div className="min-h-screen flex bg-background">

      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-red-900/40 p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-cyber-red mb-10">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-4 text-sm">
          <Link to="/admin/blogs" className="hover:text-cyber-red">
            Blogs
          </Link>

          <Link to="/admin/comments" className="hover:text-cyber-red">
            Comments
          </Link>
        </nav>

        <button
          onClick={doLogout}
          className="mt-auto bg-cyber-red text-white py-2 rounded-lg"
        >
          Logout
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10">
        <Outlet />
      </main>

    </div>
  );
}
