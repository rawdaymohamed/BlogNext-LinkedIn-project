import { posts } from "@/app/lib/placeholder-data";
import Post from "@/app/ui/components/posts/Post";
export default function Page() {
  return (
    <>
    <h2>Posts</h2>
      {posts.map((post) => (
        <Post
          key={post.id}
          {...post}
        />
      ))}
    </>
  );
}
