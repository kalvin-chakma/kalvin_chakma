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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">My Notes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note) => (
          <Link
            href={`/notes/${note.slug}`}
            key={note.slug}
            className="block"
          >
            <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
              <h2 className="text-xl font-semibold text-white mb-2">
                {note.title}
              </h2>
              <p className="text-gray-400">Click to read more</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Notes;
