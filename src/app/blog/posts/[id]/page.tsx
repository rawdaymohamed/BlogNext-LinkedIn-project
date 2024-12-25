import { notFound } from "next/navigation";
import { getPosts } from "@/app/lib/data";
import Post from "@/app/ui/components/posts/Post";
export default async function Page({ params }: { params: { id: string } }) {
  const posts = await getPosts();

  // Find the specific post by ID
  const post = posts?.find((p) => p.id === params.id);

  // Handle not found case
  if (!post) {
    notFound();
  }

  // Render the post
  return (
    <>
      <Post {...post} />
    </>
  );
}
