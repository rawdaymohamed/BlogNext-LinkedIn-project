
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
export async function GET() {
    try {
        const posts = await sql`SELECT * FROM posts ORDER BY date DESC LIMIT 2;`;
        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const title = searchParams.get('title');
    const content = searchParams.get('content');
    const date = searchParams.get('date');

    try {
        await sql`INSERT INTO posts(id, author, title, content, date) VALUES (${id}, 'Rawda', ${title}, ${content}, ${date});`;

        return NextResponse.json({ message: "post Successfully added" }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 });
    }
}
