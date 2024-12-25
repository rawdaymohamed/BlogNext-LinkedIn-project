import { createClient, sql } from '@vercel/postgres';
import { Post } from './definition';
import { unstable_noStore } from 'next/cache';
export async function connectToDB() {
    const client = createClient();
    await client.connect();
    try {
        if (client) {
            console.log("Connected to database");
            return client;
        }
    } catch (error) {
        console.log("Error connecting to database", error)
    }
    finally {
        await client.end();
    }
}
export async function getPosts(): Promise<Post[]> {
    try {
        unstable_noStore()
        const data = await sql`SELECT * from posts;`
        // console.log(data.rows);
        // Validate and map the data to ensure it matches the Post type
        const posts = data.rows.map((row) => ({
            id: row.id, // Ensure id is a string
            title: row.title,
            content: row.content,
            date: row.date // Ensure date is a string
        }));
        // throw Error("Error")
        return posts;
    } catch (error) {
        console.log("Error getting posts", error)
        return []
    }

}