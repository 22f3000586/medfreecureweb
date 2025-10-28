"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`border-b sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-shadow ${scrolled ? 'shadow-sm' : ''}`}
      style={{ height: 'var(--header-height)' }}
    >
      <div className="container-slim h-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white">
            <Image src="/logo.png" alt="Med Free Cure logo" fill sizes="56px" className="object-contain p-1.5" />
          </div>
          <span className="font-semibold">Med Free Cure</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {[
            { href: '/services', label: 'Services' },
            { href: '/faqs', label: 'FAQs' },
            { href: '/meet-your-healer', label: 'Meet Your Healer' },
            { href: '/testimonials', label: 'Testimonials' },
            { href: '/contact', label: 'Contact' }
          ].map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-brand ${active ? 'text-brand underline underline-offset-4' : ''}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-brand/30 text-brand"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="md:hidden border-t bg-white/95 backdrop-blur">
          <div className="container-slim py-4 grid gap-3">
            {[
              { href: '/services', label: 'Services' },
              { href: '/faqs', label: 'FAQs' },
              { href: '/meet-your-healer', label: 'Meet Your Healer' },
              { href: '/testimonials', label: 'Testimonials' },
              { href: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`py-2 ${pathname === item.href ? 'text-brand font-medium' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
