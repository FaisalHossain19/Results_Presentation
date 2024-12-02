'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className="container mx-auto px-8 text-center h-screen flex flex-col items-center justify-center">
      <motion.h1
        className="text-4xl font-extrabold text-primary sm:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to TestDash
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-muted-foreground sm:text-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Simplifying firmware board test results for engineering teams.
      </motion.p>
      <motion.div
        className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
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
      </motion.div>
    </section>
  );
}
