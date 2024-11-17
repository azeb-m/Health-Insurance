import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <Link href="/">Home</Link>
      <Link href="/plans">Plans</Link>
      <Link href="/benefits">Benefits</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
