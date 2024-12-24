import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
import { connectToDB } from "@/app/lib/data";
export default async function Page() {
  const client = await connectToDB();
  return (
    <>
      {client && <p className="text-green-500">Connected to database</p>}
      <h2>Posts</h2>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </>
  );
}
