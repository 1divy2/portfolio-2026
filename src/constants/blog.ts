export type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "hello-world",
    title: "Learning in Public: Why I built my portfolio",
    date: "2026-06-01",
    excerpt: "A brief look into why building side projects and learning out loud is the best way to level up.",
    content: `
# Learning in Public

When I started my journey as a Full Stack Developer, I realized something important: **building in a vacuum is lonely and slow**. 

I created this portfolio not just as a static resume, but as a living document of my progress. By writing about what I'm learning, I'm forcing myself to understand concepts deeply enough to explain them.

### What's next?
- Ship 3 more full-stack projects this year.
- Contribute to an open source repository.
- Write more articles on TanStack Start and Framer Motion!

Stay tuned.
    `,
  }
];
