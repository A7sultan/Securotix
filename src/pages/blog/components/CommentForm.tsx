import { useState } from "react";
import { postComment } from "@/lib/blogApi";
import { useToast } from "@/components/ui/use-toast";

export default function CommentForm({ blogId }: { blogId: number }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const { toast } = useToast();

  async function submit() {
    await postComment(blogId, {
      authorName: name,
      authorEmail: email,
      content
    });

    toast({
      title: "Comment submitted",
      description: "Your comment is awaiting admin approval.",
    });

    setName("");
    setEmail("");
    setContent("");
  }

  return (
    <div className="cyber-border p-6 md:p-10 rounded-xl mb-14 glass">

      <h3 className="text-2xl font-bold mb-6">Leave a comment</h3>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <input
          className="w-full p-3 bg-background border rounded-md"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 bg-background border rounded-md"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <textarea
        className="w-full p-3 bg-background border rounded-md mb-4"
        rows={5}
        placeholder="Comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={submit}
        className="w-full md:w-auto px-8 py-3 rounded-lg
                   bg-gradient-to-r from-cyber-red to-red-600
                   hover:from-red-600 hover:to-red-700
                   font-semibold text-white
                   transition-all hover:scale-[1.03] shadow-lg"
      >
        Submit Comment
      </button>
    </div>
  );
}
