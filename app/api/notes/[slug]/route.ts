import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function GET(
  request: Request,
  context: { params: { slug: string } }
) {
  try {
    const params = await context.params;
    const { slug } = params;
    const filePath = path.join(process.cwd(), 'notes', `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    return NextResponse.json({ content: fileContent });
  } catch (error) {
    console.error('Error reading note:', error);
    return NextResponse.json({ error: 'Note not found' }, { status: 404 });
  }
}
