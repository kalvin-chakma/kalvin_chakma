import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const notesDirectory = path.join(process.cwd(), 'notes');
    const files = fs.readdirSync(notesDirectory);
    const markdownFiles = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        title: file.replace('.md', '').replace(/-/g, ' '),
        slug: file.replace('.md', ''),
      }));

    return NextResponse.json(markdownFiles);
  } catch (error) {
    console.error('Error reading notes directory:', error);
    return NextResponse.json({ error: 'Failed to fetch notes' }, { status: 500 });
  }
} 