import { useState } from "react";
import { createBlog } from "@/pages/admin/services/adminBlogService";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function AdminCreateBlogPage() {
  const nav = useNavigate();

  const [title,setTitle]=useState("");
  const [slug,setSlug]=useState("");
  const [content,setContent]=useState("");

  async function submit(e:any){
    e.preventDefault();
    await createBlog({title,slug,content});
    toast.success("Blog created");
    nav("/admin/blogs");
  }

  return (
    <div className="max-w-5xl mx-auto">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Create Blog
        <div className="fancy-line mx-auto w-[200px] mt-3" />
      </h1>

      <form
        onSubmit={submit}
        className="glass p-10 rounded-2xl cyber-border space-y-6"
      >

        <input
          className="w-full bg-black/40 border border-red-900/40 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-red"
          placeholder="Blog Title"
          value={title}
          onChange={e=>{
            setTitle(e.target.value);
            setSlug(
              e.target.value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g,"-")
            );
          }}
        />

        <input
          className="w-full bg-black/40 border border-red-900/40 rounded-xl px-4 py-3 focus:outline-none focus:border-cyber-red"
          placeholder="Slug"
          value={slug}
          onChange={e=>setSlug(e.target.value)}
        />

        <textarea
          className="w-full bg-black/40 border border-red-900/40 rounded-xl px-4 py-4 h-[320px] focus:outline-none focus:border-cyber-red"
          placeholder="Write blog content..."
          value={content}
          onChange={e=>setContent(e.target.value)}
        />

        <button
          className="bg-cyber-red hover:bg-red-600 transition px-8 py-3 rounded-xl text-white font-semibold"
        >
          Create Blog
        </button>

      </form>
    </div>
  );
}

