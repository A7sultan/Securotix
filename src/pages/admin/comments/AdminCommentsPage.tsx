import { useEffect, useState } from "react";
import {
  pendingComments,
  moderateComment,
} from "@/pages/admin/services/adminCommentService";

export default function AdminCommentsPage() {

  const [comments, setComments] = useState<any[]>([]);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await pendingComments();
    setComments(data);
  }

  async function approve(id:number){
    await moderateComment(id,true);
    load();
  }

  async function reject(id:number){
    await moderateComment(id,false);
    load();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Pending Comments</h1>

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="glass p-6 rounded-xl">

            <div className="font-semibold">{c.authorName}</div>
            <div className="text-sm text-muted-foreground mb-4">
              Blog: {c.blogTitle}
            </div>

            <p className="mb-6">{c.content}</p>

            <div className="flex gap-4">
              <button
                onClick={()=>approve(c.id)}
                className="bg-green-600 px-4 py-2 rounded text-white"
              >
                Approve
              </button>

              <button
                onClick={()=>reject(c.id)}
                className="bg-red-600 px-4 py-2 rounded text-white"
              >
                Reject
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
