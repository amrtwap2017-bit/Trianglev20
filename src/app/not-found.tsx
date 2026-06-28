import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-obsidian px-6 text-center">
      <h1 className="text-gold-gradient text-8xl font-light md:text-9xl">404</h1>
      <p className="mt-4 text-2xl font-light text-ivory md:text-3xl">This page doesn&rsquo;t exist.</p>
      <p className="mt-3 text-silver">But our engineering never misses.</p>
      <nav className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="focus-gold inline-flex h-12 items-center gap-2 bg-gold px-8 font-semibold text-obsidian transition-colors hover:bg-gold-light"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
        <Link
          href="/contact"
          className="focus-gold inline-flex h-12 items-center gap-2 border border-tb-border px-8 font-medium text-ivory transition-colors hover:border-tb-border-light hover:bg-smoke"
        >
          Discuss a Project
          <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>
      <div className="mt-16 flex gap-8 text-sm text-ghost">
        <Link href="/services" className="hover:text-silver transition-colors">Services</Link>
        <Link href="/projects" className="hover:text-silver transition-colors">Projects</Link>
        <Link href="/about" className="hover:text-silver transition-colors">About</Link>
        <Link href="/contact" className="hover:text-silver transition-colors">Contact</Link>
      </div>
    </div>
  );
}