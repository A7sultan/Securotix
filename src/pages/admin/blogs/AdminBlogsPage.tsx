import { useEffect, useState } from "react";
import { adminBlogs, deleteBlog, publishBlog } from "@/pages/admin/services/adminBlogService";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Pencil, Trash2, Eye, Upload, EyeOff } from "lucide-react";

export default function AdminBlogsPage() {

  const [blogs, setBlogs] = useState<any[]>([]);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(() => {
    adminBlogs().then(setBlogs);
  }, []);

  return (
    <div className="px-4 md:px-10 py-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">
          Blog Management
        </h1>

        <Link
          to="/admin/blogs/create"
          className="bg-cyber-red hover:bg-red-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
        >
          Create Blog
        </Link>
      </div>

      {/* Responsive grid */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {blogs.length === 0 && (
          <div className="glass border border-red-900/30 rounded-2xl p-14 text-center">

            <h3 className="text-2xl font-semibold mb-3">
              No blogs published yet
            </h3>

            <p className="text-muted-foreground">
              Our latest security insights will appear here soon.
            </p>

            <div className="fancy-line mx-auto w-[180px] mt-6" />

          </div>
        )}


        {blogs.map(b => (
          <div
            key={b.id}
            className="glass p-6 rounded-2xl hover:border-cyber-red transition-all border border-red-500/20 flex flex-col"
          >

            <h2 className="text-xl font-bold mb-2 text-white">
              {b.title}
            </h2>

            <div className="fancy-line w-[120px] mb-4" />

            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-grow">
              {b.content}
            </p>

            <div className="flex justify-between items-center mt-6 text-sm text-muted-foreground">

              <span>
                {new Date(b.createdAt).toLocaleDateString()}
              </span>

              <div className="flex gap-2">

                {/* Publish */}
                <button
                  onClick={async () => {
                    await publishBlog(b.id, !b.published);
                    toast.success(b.published ? "Blog unpublished" : "Blog published");

                    setBlogs(prev =>
                      prev.map(x =>
                        x.id === b.id ? { ...x, published: !x.published } : x
                      )
                    );
                  }}
                  className={`p-2 rounded-lg text-white transition ${b.published
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-cyber-red hover:bg-red-600"
                    }`}

                  title={b.published ? "Unpublish" : "Publish"}
                >
                  {b.published ? <EyeOff size={18} /> : <Upload size={18} />}
                </button>


                <Link
                  to={`view/${b.id}`}
                  className="p-2 rounded-lg border border-gray-600 hover:border-white"
                  title="View"
                >
                  <Eye size={18} />
                </Link>

                <Link
                  to={`/admin/blogs/edit/${b.id}`}
                  className="p-2 rounded-lg border border-cyber-red text-cyber-red hover:bg-cyber-red hover:text-white"
                  title="Edit"
                >
                  <Pencil size={18} />
                </Link>

                <button
                  onClick={() => setDeleteId(b.id)}
                  className="p-2 rounded-lg bg-red-600 text-white"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>

          </div>
        ))}
      </div>

      {/* Modal OUTSIDE grid */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          <div className="glass border border-red-900/40 p-8 rounded-2xl w-full max-w-md text-center">

            <h3 className="text-xl font-bold mb-4">
              Delete Blog?
            </h3>

            <p className="text-muted-foreground mb-6">
              This action cannot be undone.
            </p>

            <div className="flex justify-center gap-4">

              <button
                onClick={() => setDeleteId(null)}
                className="px-6 py-2 rounded-lg border border-gray-600"
              >
                Cancel
              </button>

              <button
                onClick={async () => {
                  try {
                    await deleteBlog(deleteId);

                    setBlogs(blogs.filter(x => x.id !== deleteId));
                    toast.success("Blog deleted");
                    setDeleteId(null);

                  } catch (err: any) {

                    toast.error(
                      err.message ||
                      "Cannot delete blog. Delete associated comments first."
                    );

                    setDeleteId(null);
                  }
                }}
                className="px-6 py-2 rounded-lg bg-red-600 text-white"
              >
                Delete
              </button>


            </div>
          </div>
        </div>
      )}

    </div>
  );
}
