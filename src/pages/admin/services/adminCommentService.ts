import { API_BASE_URL } from "@/lib/api";
import { getToken } from "./authService";

const headers = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`
});

/* Pending */
export async function pendingComments() {
  const res = await fetch(`${API_BASE_URL}/api/admin/comments/pending`, {
    headers: headers()
  });
  return res.json();
}

/* Approved (NEW) */
export async function approvedComments() {
  const res = await fetch(`${API_BASE_URL}/api/admin/comments/approved`, {
    headers: headers()
  });
  return res.json();
}

/* Approve / Reject */
export async function moderateComment(id:number, approve:boolean){
  await fetch(
    `${API_BASE_URL}/api/admin/comments/${id}?approve=${approve}`,
    {
      method:"PATCH",
      headers: headers()
    }
  );
}

/* Delete */
export async function deleteComment(id:number){
  await fetch(`${API_BASE_URL}/api/admin/comments/${id}`,{
    method:"DELETE",
    headers: headers()
  });
}
