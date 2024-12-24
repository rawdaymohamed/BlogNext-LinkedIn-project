import React from "react";
import Post from "@/app/ui/components/posts/Post";
import { connectToDB, getPosts } from "@/app/lib/data";
import { Post as PostType } from "@/app/lib/definition";
export default async function Page() {
  const client = await connectToDB();
  const posts: PostType[] = await getPosts();

  return (
    <>
      {client && <p className="text-green-500">Connected to database</p>}
      <h2>Posts</h2>
      {posts?.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </>
  );
}
