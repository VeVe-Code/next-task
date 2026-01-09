"use client";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: Post[]) => {
        setPosts(data.slice(0, 5));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="mb-6">Loading...</p>;
  if (error) return <p className="mb-6 text-red-500">{error}</p>;

  return (
    <ul className="mb-6 space-y-2">
      {posts.map((post) => (
        <li key={post.id} className="rounded border p-2">
          {post.title}
        </li>
      ))}
    </ul>
  );
}
