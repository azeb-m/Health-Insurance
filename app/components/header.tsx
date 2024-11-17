// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Health Insurance Co.</h1>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-yellow-500">
            Home
          </Link>
          <Link href="/plans" className="hover:text-yellow-500">
            Plans
          </Link>
          <Link href="/benefits" className="hover:text-yellow-500">
            Benefits
          </Link>
          <Link href="/faq" className="hover:text-yellow-500">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-yellow-500">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
