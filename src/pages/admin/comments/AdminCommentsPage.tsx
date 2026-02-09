import { useEffect, useState } from "react";
import {
  pendingComments,
  approvedComments,
  moderateComment,
  deleteComment
} from "@/pages/admin/services/adminCommentService";
import { toast } from "sonner";

export default function AdminCommentsPage() {

  const [tab,setTab] = useState<"pending"|"approved">("pending");
  const [comments, setComments] = useState<any[]>([]);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  useEffect(()=>{
    load();
  },[tab]);

  async function load(){
    const data = tab==="pending"
      ? await pendingComments()
      : await approvedComments();

    setComments(data);
  }

  async function approve(id:number){
    await moderateComment(id,true);
    toast.success("Comment approved");
    load();
  }

  async function confirmDelete(){
    if(!deleteId) return;

    await deleteComment(deleteId);
    toast.success(tab==="pending"
      ? "Comment rejected and deleted"
      : "Comment deleted");

    setDeleteId(null);
    load();
  }

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">Comments Moderation</h1>

      {/* Tabs */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={()=>setTab("pending")}
          className={`px-5 py-2 rounded-lg border transition ${
            tab==="pending"
              ? "bg-cyber-red text-white border-cyber-red"
              : "border-gray-600"
          }`}
        >
          Pending
        </button>

        <button
          onClick={()=>setTab("approved")}
          className={`px-5 py-2 rounded-lg border transition ${
            tab==="approved"
              ? "bg-cyber-red text-white border-cyber-red"
              : "border-gray-600"
          }`}
        >
          Approved
        </button>
      </div>

      {/* Empty */}
      {comments.length===0 && (
        <div className="glass border border-red-900/30 rounded-2xl p-12 text-center">
          <h3 className="text-xl font-semibold mb-2">
            No {tab} comments
          </h3>
          <div className="fancy-line mx-auto w-[160px] mt-6" />
        </div>
      )}

      {/* List */}
      <div className="space-y-6">
        {comments.map(c=>(
          <div key={c.id}
               className="glass p-6 rounded-xl border border-red-900/30 space-y-4">

            <div className="flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <div className="font-semibold text-lg">{c.authorName}</div>
                <div className="text-sm text-muted-foreground">{c.authorEmail}</div>
              </div>
              <div className="text-sm text-muted-foreground">
                Blog: {c.blogTitle}
              </div>
            </div>

            <p>{c.content}</p>

            <div className="flex gap-3">

              {tab==="pending" && (
                <button
                  onClick={()=>approve(c.id)}
                  className="px-5 py-2 rounded-lg border border-cyber-red text-cyber-red hover:bg-cyber-red hover:text-white"
                >
                  Approve
                </button>
              )}

              <button
                onClick={()=>setDeleteId(c.id)}
                className="px-5 py-2 rounded-lg bg-cyber-red text-white"
              >
                {tab==="pending" ? "Reject" : "Delete"}
              </button>

            </div>

          </div>
        ))}
      </div>

      {/* Modal */}
      {deleteId && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="glass border border-red-900/40 p-8 rounded-2xl w-[420px] text-center">

            <h3 className="text-xl font-bold mb-4">
              {tab==="pending" ? "Reject Comment?" : "Delete Comment?"}
            </h3>

            <div className="flex justify-center gap-4">
              <button
                onClick={()=>setDeleteId(null)}
                className="px-6 py-2 rounded-lg border border-gray-600"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-6 py-2 rounded-lg bg-cyber-red text-white"
              >
                Confirm
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
