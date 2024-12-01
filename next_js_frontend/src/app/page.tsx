'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-muted via-background to-muted">
      {/* Hero Section */}
      <section className="container mx-auto px-8">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">
          Welcome to TestDash
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Simplifying firmware board test results for engineering teams.
        </p>
        <p className="mt-2 text-muted-foreground">
          TestDash makes visualizing and navigating test results intuitive and efficient.
        </p>

        {/* Call-to-Action */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/results">
            <Button variant="default" className="px-6 py-3 text-lg">
              View Results Dashboard
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" className="px-6 py-3 text-lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-sm text-muted-foreground">
        © {new Date().getFullYear()} TestDash. All rights reserved.
      </footer>
    </main>
  );
}
