import { createFileRoute, Link } from '@tanstack/react-router';
import { BLOG_POSTS } from '../constants/blog';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/blog')({
  component: BlogList,
})

function BlogList() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back to Portfolio
          </Link>
          <h1 className="mt-8 font-display text-4xl">Learning in Public.</h1>
          <p className="mt-4 text-muted-foreground">Documenting the journey, one bug at a time.</p>
        </div>
        
        <div className="space-y-12">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="group flex flex-col gap-2">
              <time className="font-mono text-[10px] uppercase text-mint">{post.date}</time>
              <Link to={`/blog/${post.id}`} className="font-display text-2xl text-foreground group-hover:text-mint transition-colors">
                {post.title}
              </Link>
              <p className="text-muted-foreground">{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="mt-2 font-mono text-[10px] uppercase text-muted-foreground hover:text-foreground">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
