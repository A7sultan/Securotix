import { API_BASE_URL } from "@/lib/api";

export async function adminLogin(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  const data = await res.json();

  localStorage.setItem("admin_token", data.token);

  return data.token;  
}

export function getToken() {
  return localStorage.getItem("admin_token");
}

export function logout() {
  localStorage.removeItem("admin_token");
}
