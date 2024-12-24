import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id == params.id);
  return (
    <>
      <Post {...post} />
    </>
  );
}
