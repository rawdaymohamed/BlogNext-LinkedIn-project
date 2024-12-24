import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id == params.id);
  if (!post)return <p>This post doesn't exist</p>
  return (
    <>
      <Post {...post} />
    </>
  );
}
