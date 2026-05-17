import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white">
      <h2 className="text-center text-4xl font-serif tracking-tight leading-tight">NORDIC ROSE</h2>
      <Menu />
    </header>
  );
}
