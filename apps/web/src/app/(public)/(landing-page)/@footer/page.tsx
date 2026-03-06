'use cache';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

const GITHUB_URL = 'https://github.com/TreX-Hub/press0';
const LINKEDIN_URL = 'https://linkedin.com/in/devs-den';

const Footer = async () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full pt-16 md:pt-24 pb-8">
      <div className="flex flex-row items-center justify-between">
        <p className="text-muted-foreground text-sm tracking-tight">
          © {year} Press0. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <Link
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1.5"
          >
            <Github className="size-5" strokeWidth={1.75} />
          </Link>
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full p-1.5"
          >
            <Linkedin className="size-5" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
