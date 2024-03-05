import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full relative flex items-center justify-between max-w-5xl mx-auto px-4 py-5">
      <Link href={"/"} className="font-bold text-4xl">
        <span className="text-slate-600">JS</span>
        <span className="text-primary">Verse</span>
      </Link>
    </nav>
  );
}
