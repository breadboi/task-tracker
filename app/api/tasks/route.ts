import { NextResponse } from 'next/server';
import { sql } from "@vercel/postgres";
import { Task } from '@/types/task';

export async function GET() {

    const rows = await sql`SELECT * FROM tasks;`;
    const tasks = rows.rows as Task[]

    return NextResponse.json({ tasks });
}