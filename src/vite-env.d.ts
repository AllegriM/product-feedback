/// <reference types="vite/client" />

interface Suggestion {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: {
    id: number;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  }[];
}
