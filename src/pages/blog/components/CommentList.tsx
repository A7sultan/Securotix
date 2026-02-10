export default function CommentList({ comments }: { comments: any[] }) {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Comments</h3>

      {comments.map((c) => (
        <div key={c.id} className="border-b py-6">
          <div className="font-bold">{c.authorName}</div>
          <div className="text-muted-foreground">{c.content}</div>
        </div>
      ))}
    </div>
  );
}
