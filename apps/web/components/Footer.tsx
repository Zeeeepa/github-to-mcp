'use client'

import { Github, BookOpen } from 'lucide-react'
import Link from 'next/link'

const FOOTER_LINKS = {
  resources: [
    { href: '/#how-it-works', label: 'How it works' },
    { href: '/#features', label: 'Features' },
    { href: '/playground', label: 'Playground' },
    { href: '/batch', label: 'Batch Convert' },
    { href: 'https://github.com/nirholas/github-to-mcp#readme', label: 'Documentation', icon: BookOpen, external: true },
    { href: 'https://modelcontextprotocol.io', label: 'MCP Protocol', external: true },
  ],
  project: [
    { href: 'https://github.com/nirholas/github-to-mcp', label: 'GitHub Repository', icon: Github, external: true },
    { href: 'https://github.com/nirholas/github-to-mcp/issues', label: 'Report Issues', external: true },
    { href: 'https://github.com/nirholas/github-to-mcp/blob/main/CONTRIBUTING.md', label: 'Contributing', external: true },
    { href: 'https://github.com/nirholas/github-to-mcp/blob/main/LICENSE', label: 'License', external: true },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                <Github className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white">
                github-to-mcp
              </span>
            </Link>
            <p className="text-neutral-500 text-sm max-w-md mb-6">
              Convert GitHub repositories into MCP (Model Context Protocol) servers, making your code instantly accessible to AI agents like Claude, ChatGPT, and other assistants.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://github.com/nirholas/github-to-mcp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-neutral-800 flex items-center justify-center hover:border-neutral-600 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-neutral-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.icon && <link.icon className="w-4 h-4" />}
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3 className="text-white font-semibold mb-4">Project</h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.project.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-neutral-500">
            © {new Date().getFullYear()} github-to-mcp — Open Source
          </div>
          <div className="text-sm text-neutral-500">
            Built with ❤️ for the AI community on{' '}
            <a 
              href="https://github.com/nirholas/github-to-mcp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
