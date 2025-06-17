"use client"
import React from "react";
import Link from "next/link";
interface NoteCard {
  title: string;
  slug: string;
}

const Notes = () => {
  const [notes, setNotes] = React.useState<NoteCard[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/notes');
        if (!response.ok) {
          throw new Error('Failed to fetch notes');
        }
        const data = await response.json();
        setNotes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-white text-black dark:bg-black dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
        {notes.map((note) => (
          <Link
            href={`/notes/${note.slug}`}
            key={note.slug}
            className="block"
          >
            <div className="cursor-pointer rounded-md border border-gray-500/75 p-4 shadow transition-all hover:shadow-md hover:scale-[1.02]">
              <h2 className="text-md font-semibold ">
                {note.title}
              </h2>
              <p className="text-gray-400 text-xs/4">Click to read more</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;
