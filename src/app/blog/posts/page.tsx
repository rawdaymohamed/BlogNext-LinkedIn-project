import React from "react";
import Post from "@/app/ui/components/posts/Post";
import { connectToDB, getPosts } from "@/app/lib/data";
import { Post as PostType } from "@/app/lib/definition";
import Link from "next/link";
import { Button } from "@/app/ui/components/button";
export default async function Page() {
  const client = await connectToDB();
  const posts: PostType[] = await getPosts();

  return (
    <>
      {client && <p className="text-green-500">Connected to database</p>}
      <h2>Posts</h2>
      <Link href="/blog/posts/insert">
        <Button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">
          New +
        </Button>
      </Link>
      {posts?.map((post) => (
        <Post {...post} key={post.id} />
      ))}
    </>
  );
}
