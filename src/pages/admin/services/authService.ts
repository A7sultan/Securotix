import { API_BASE_URL } from "@/lib/api";

/* ================================
   STORAGE KEYS
================================ */

const TOKEN_KEY = "admin_token";
const SETUP_KEY = "admin_requires_setup";

/* ================================
   LOGIN
================================ */

export async function adminLogin(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("Invalid credentials");

  const data = await res.json();

  localStorage.setItem("admin_token", data.token);
  localStorage.setItem(
    "admin_requires_setup",
    data.requiresSetup ? "true" : "false"
  );

  return data;
}


/* ================================
   COMPLETE FIRST SETUP
================================ */



export async function completeSetup(newEmail: string, newPassword: string) {
  const token = getToken();

  const res = await fetch(`${API_BASE_URL}/api/admin/complete-setup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      newEmail,
      newPassword,
    }),
  });

  if (!res.ok) throw new Error("Setup failed");

  localStorage.setItem("admin_requires_setup", "false");
}


/* ================================
   FORGOT PASSWORD
================================ */
export async function forgotPassword(email: string) {
  const res = await fetch(`${API_BASE_URL}/api/admin/forgot-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error("Failed to send reset email");
  }

  return true; 
}


export async function resetPassword(token: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/api/admin/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, newPassword: password }),
  });

  if (!res.ok) {
    throw new Error("Password reset failed");
  }

  return res.json();
}

/* ================================
   TOKEN HELPERS
================================ */

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function requiresSetup() {
  return localStorage.getItem(SETUP_KEY) === "true";
}

export function isAuthenticated() {
  return !!getToken();
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(SETUP_KEY);
}

/* ================================
   AUTH FETCH (PRODUCTION SAFE)
   Automatically handles 401
================================ */

export async function authFetch(
  input: RequestInfo,
  init: RequestInit = {}
) {
  const token = getToken();

  const headers = {
    ...init.headers,
    Authorization: token ? `Bearer ${token}` : "",
  };

  const response = await fetch(input, {
    ...init,
    headers,
  });

  if (response.status === 401) {
    logout();
    window.location.href = "/admin/login";
  }

  return response;
}
