import { notFound } from "next/navigation";
import { getPosts } from "@/app/lib/data";
import Post from "@/app/ui/components/posts/Post";
export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();
  const post = posts?.find((p) => p.id == params.id);
  if (!post) notFound();
  return (
    <>
      <Post {...post} />
    </>
  );
}
