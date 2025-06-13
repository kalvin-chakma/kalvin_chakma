'use client';

import React from "react";
import MDEditor from "@uiw/react-md-editor";
import Link from "next/link";
import { FaBackward } from "react-icons/fa";


export default function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = React.use(params);
  const [content, setContent] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`/api/notes/${resolvedParams.slug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch note');
        }
        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [resolvedParams.slug]);

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-5 bg-black ">
      <Link
        href="/notes"
        className="px-4 gap-2 flex items-center transition-colors duration-200 text-white font-semibold hover:text-white/50"
      >
        <FaBackward />
      Back
      </Link>
      {loading ? (<div>Loading....</div>):(<div data-color-mode="dark">
        <MDEditor.Markdown 
          source={content} 
          style={{
            backgroundColor: 'transparent',
            fontSize: '16px',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            padding: '1em',
          }} 
        />
      </div>)}
    </div>
  );
} 