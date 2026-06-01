import { createFileRoute, Link } from '@tanstack/react-router';
import { BLOG_POSTS } from '../constants/blog';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/blog/$id')({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.id === params.id);
    if (!post) {
      throw new Error('Post not found');
    }
    return { post };
  },
  component: BlogPost,
})

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>
        <article className="mt-12">
          <header className="mb-12">
            <time className="font-mono text-[10px] uppercase text-mint">{post.date}</time>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl leading-tight text-foreground">{post.title}</h1>
          </header>
          <div className="prose prose-invert prose-mint max-w-none prose-headings:font-display prose-a:text-mint hover:prose-a:text-mint/80">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
