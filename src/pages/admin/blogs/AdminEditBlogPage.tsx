import { useEffect, useState } from "react";
import { getAdminBlog, updateBlog } from "@/pages/admin/services/adminBlogService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

export default function AdminEditBlogPage() {
  const { id } = useParams();
  const nav = useNavigate();
  const [form, setForm] = useState<any>();

  useEffect(() => {
    getAdminBlog(Number(id)).then(setForm);
  }, [id]);

  if (!form) return null;

  async function submit(e: any) {
    e.preventDefault();
    await updateBlog(form.id, form);
    toast.success("Blog updated successfully");
    nav("/admin/blogs");
  }

  return (
    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-2 text-center">
        Edit Blog
      </h1>
      <div className="fancy-line mx-auto w-[200px] mb-10" />

      <form
        onSubmit={submit}
        className="glass border border-red-900/40 p-10 rounded-2xl space-y-6"
      >
        <input
          className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white"
          value={form.title}
          placeholder="Blog Title"
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <input
          className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white"
          value={form.slug}
          placeholder="Slug"
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
        />

        <textarea
          className="w-full bg-black border border-red-900/40 px-4 py-3 rounded-lg text-white h-64"
          value={form.content}
          placeholder="Blog content"
          onChange={(e) =>
            setForm({ ...form, content: e.target.value })
          }
        />

        <button className="bg-cyber-red hover:bg-red-600 transition px-8 py-3 rounded-xl text-white font-semibold">
          Save Changes
        </button>
      </form>
    </div>
  );
}
