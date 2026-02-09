import { API_BASE_URL } from "@/lib/api";
import { getToken } from "./authService";

export async function pendingComments(){
  const res = await fetch(`${API_BASE_URL}/api/admin/comments/pending`,{
    headers:{ Authorization:`Bearer ${getToken()}` }
  });
  return res.json();
}

export async function moderateComment(id:number,approve:boolean){
  await fetch(`${API_BASE_URL}/api/admin/comments/${id}?approve=${approve}`,{
    method:"PATCH",
    headers:{ Authorization:`Bearer ${getToken()}` }
  });
}
