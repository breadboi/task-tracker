import { NextRequest, NextResponse } from 'next/server';
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest, context: { params: any }) {
    const id = context.params.id;
    console.log(context);
    await sql`UPDATE tasks SET completed = NOT (SELECT completed FROM tasks where id = ${id}) WHERE id = ${id};`;

    return NextResponse.json( { "Success": true });
}