import apiClient from "@/lib/apiClient";

export const fetchBlogs = async () => {
  const res = await apiClient.get("/api/blogs");
  return res.data;
};

export const fetchBlog = async (slug: string) => {
  const res = await apiClient.get(`/api/blogs/${slug}`);
  return res.data;
};

export const fetchComments = async (blogId: number) => {
  const res = await apiClient.get(`/api/blogs/${blogId}/comments`);
  return res.data;
};

export const submitComment = async (blogId: number, payload: any) => {
  const res = await apiClient.post(`/api/blogs/${blogId}/comments`, payload);
  return res.data;
};
