import { API_BASE_URL } from "@/lib/api";

export async function fetchBlogs() {
  const res = await fetch(`${API_BASE_URL}/api/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export async function fetchBlog(slug: string) {
  const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`);
  if (!res.ok) throw new Error("Blog not found");
  return res.json();
}

export async function fetchComments(blogId: number) {
  const res = await fetch(`${API_BASE_URL}/api/blogs/${blogId}/comments`);
  return res.json();
}

export async function postComment(blogId: number, payload: any) {
  const res = await fetch(`${API_BASE_URL}/api/blogs/${blogId}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
}
