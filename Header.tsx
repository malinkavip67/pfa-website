"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Главная" },
  { href: "/players", label: "Игроки" },
  { href: "/news", label: "Новости" },
  { href: "/services", label: "Услуги" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-5">
          <span className="text-2xl font-bold text-white">PFA</span>
        </Link>
        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-white ${
                pathname === link.href ? "text-white" : "text-white/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}