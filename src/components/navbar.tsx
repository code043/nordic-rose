import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <h2 className="text-center text-4xl font-serif tracking-tight leading-tight">NORDIC ROSE</h2>
      <nav className="hidden md:block">
        <ul className="font-serif space-x-8">
          <Link href={'/'}>BLOG</Link>
          <Link href={'/about'}>ABOUT</Link>
          <Link href={'/links'}>LINKS</Link>
          <Link href={'/projects'}>PROJECTS</Link>
        </ul>
      </nav>
      <Menu className="md:hidden"/>
    </header>
  );
}
