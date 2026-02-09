import { API_BASE_URL } from "@/lib/api";
import { getToken } from "./authService";

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

export const adminBlogs = async () => {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs`, {
    headers: headers(),
  });
  return res.json();
};

export const getAdminBlog = async (id: number) => {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs/${id}`, {
    headers: headers(),
  });
  return res.json();
};

export const createBlog = async (payload: any) => {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const updateBlog = async (id: number, payload: any) => {
  const res = await fetch(`${API_BASE_URL}/api/admin/blogs/${id}`, {
    method: "PUT",
    headers: headers(),
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const deleteBlog = async (id: number) => {
  await fetch(`${API_BASE_URL}/api/admin/blogs/${id}`, {
    method: "DELETE",
    headers: headers(),
  });
};

export const publishBlog = async (id: number, value: boolean) => {
  const res = await fetch(
    `${API_BASE_URL}/api/admin/blogs/${id}/publish?value=${value}`,
    {
      method: "PATCH",
      headers: headers(),
    }
  );
  return res.ok;
};
